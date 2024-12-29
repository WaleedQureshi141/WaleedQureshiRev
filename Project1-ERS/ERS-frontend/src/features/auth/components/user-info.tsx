import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useUserInfo } from "./hooks/use-user-info";
import { useRouter } from "@tanstack/react-router";

export function UserInfo()
{
    const {data: userInfo} = useUserInfo();

    return (
    <Card className="flex justify-center">
        <CardHeader>
            <CardTitle className="flex justify-center">Welcome {userInfo?.firstName} {userInfo?.lastName}</CardTitle>
            <CardDescription className="flex justify-center">EMPLOYEE REIMBURSEMENTS</CardDescription>
        </CardHeader>
    </Card>
    )
}