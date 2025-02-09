import { TMHCloud } from "../../service/cloudinary"

export const passwordResetEmail = async (authorizationToken: string) => {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Password Reset</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <style type="text/css">
        @media only screen and (max-width: 600px) {
            .main-table {
                width: 100% !important;
            }
            .content-table {
                width: 100% !important;
            }
            .logo {
                width: 120px !important;
            }
            .heading {
                font-size: 24px !important;
            }
            .content {
                padding: 20px !important;
            }
            .button {
                width: 100% !important;
            }
            .button a {
                display: block !important;
                padding: 12px 20px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f8;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="main-table" style="font-family: Arial, sans-serif;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table border="0" cellpadding="0" cellspacing="0" width="500" class="content-table" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <!-- Logo -->
                    <tr>
                        <td align="center" style="padding: 40px 40px 20px;">
                            <img src="${await TMHCloud.optimizeAsset("logo_on_transparent")}" alt="Traders Mentors Hub Logo" class="logo" style="width: 150px; height: auto;"/>
                        </td>
                    </tr>
                    
                    <!-- Heading -->
                    <tr>
                        <td align="center" class="content" style="padding: 20px 40px;">
                            <h1 class="heading" style="color: #3c4043; font-size: 28px; font-weight: 500; margin: 0 0 20px;">Password Reset</h1>
                        </td>
                    </tr>
                    
                    <!-- Main Text -->
                    <tr>
                        <td align="center" class="content" style="padding: 0 40px;">
                            <p style="color: #5f6368; font-size: 16px; line-height: 24px; margin: 0 0 30px;">
                                If you've lost your password or wish to reset it,<br/>
                                use the link below to get started.
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Button -->
                    <tr>
                        <td align="center" style="padding: 0 40px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" class="button">
                                <tr>
                                    <td align="center" style="background-color: #794C9C; border-radius: 4px;">
                                        <a href="http://tradersmentorshub.com/account/reset-password/${authorizationToken}" target="_blank" 
                                           style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; 
                                                  text-decoration: none; padding: 12px 40px; display: inline-block; 
                                                  font-weight: 500;">
                                            Reset Your Password
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Security Notice -->
                    <tr>
                        <td align="center" class="content" style="padding: 0 40px 40px;">
                            <p style="color: #5f6368; font-size: 14px; line-height: 20px; margin: 0;">
                                If you did not request a password reset, you can safely ignore this email. Only a person with access to your email can reset your account password.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`
}