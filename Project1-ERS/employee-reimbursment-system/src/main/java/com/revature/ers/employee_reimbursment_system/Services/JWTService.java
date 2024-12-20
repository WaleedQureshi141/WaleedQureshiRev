package com.revature.ers.employee_reimbursment_system.Services;

import java.util.Date;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JWTService 
{
    @Value("${jwt.secret}")
    private String SECRET_KEY;

    public String extractUsername(String token)
    {
        return extractClaims(token, Claims::getSubject);
    }

    public boolean isValid(String token, UserDetails user)
    {
        String username = extractUsername(token);
        return (username.equals(user.getUsername()) && !isTokenExpired(token));
    }
        
    private boolean isTokenExpired(String token) 
    {
        return extractExpiration(token).before(new Date());
    }
        
    private Date extractExpiration(String token) 
    {
        return extractClaims(token, Claims::getExpiration);
    }

    public <T> T extractClaims(String token, Function<Claims, T> resolver)
    {
        Claims claims = extractAllClaims(token);
        return resolver.apply(claims);
    }

    private Claims extractAllClaims(String token)
    {
        return Jwts.parser()
            .verifyWith(getSignedKey())
            .build()
            .parseSignedClaims(token)
            .getPayload();
    }

    public String generateToken(UserDetails user)
    {
        String token = Jwts
            .builder()
            .subject(user.getUsername())
            .issuedAt(new Date(System.currentTimeMillis()))
            .expiration(new Date(System.currentTimeMillis() + 1 * 60 * 60 * 1000))
            .signWith(getSignedKey())
            .compact();

        return token;
    }

    private SecretKey getSignedKey()
    {
        byte[] keyBytes = Decoders.BASE64URL.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
