package com.revature.ers.employee_reimbursment_system.Config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import com.revature.ers.employee_reimbursment_system.Filter.JwtAuthenticationFilter;
import com.revature.ers.employee_reimbursment_system.Services.UserDetailsImpl;

@Configuration
@EnableWebSecurity
public class SecurityConfig 
{
    @Autowired
    UserDetailsImpl userDetailsImpl;

    @Autowired
    JwtAuthenticationFilter authenticationFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception
    {
        return http
            .cors(c -> 
            {
                CorsConfigurationSource source = req ->
                {
                    CorsConfiguration configuration = new CorsConfiguration();
                    configuration.setAllowedOrigins(List.of("http://localhost:5173"));
                    configuration.setAllowedMethods(List.of("GET", "POST", "PATCH", "DELETE"));
                    configuration.setAllowedHeaders(List.of("*"));
                    configuration.setAllowCredentials(true);

                    return configuration;
                };
                c.configurationSource(source);
            })
            .csrf(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests(
                req -> req.requestMatchers("/user/auth/**")
                .permitAll()
                .requestMatchers("/user/admin/**", "/reimb/admin/**").hasAuthority("ADMIN")
                .requestMatchers("/reimb/**").hasAuthority("USER")
                .anyRequest()
                .authenticated()
            ).userDetailsService(userDetailsImpl)
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .addFilterBefore(authenticationFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder()
    {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception
    {
        return configuration.getAuthenticationManager();
    }
}
