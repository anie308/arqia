import { Configs } from "../../configs"
import { TMHCloud } from "../../service/cloudinary"

export const sendVerificationEmail= async (verificationCode:string)=>{
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Email Verification</title>
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
                width: 150px !important;
            }
            h1 {
                font-size: 24px !important;
            }
            .description, .alternative-text, .help-text {
                font-size: 14px !important;
            }
            .verification-code {
                font-size: 28px !important;
            }
            .button {
                width: 100% !important;
            }
            .button a {
                display: block !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="main-table" style="font-family: Arial, sans-serif;">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <table border="0" cellpadding="0" cellspacing="0" width="600" class="content-table" style="max-width: 600px;">
                    <!-- Logo -->
                    <tr>
                        <td align="center" style="padding: 20px 0;">
                            <img src="${await TMHCloud.optimizeAsset("logo_on_transparent")}" alt="${Configs.organization.name}" class="logo" style="width: 200px; height: auto;"/>
                        </td>
                    </tr>
                    
                    <!-- Heading -->
                    <tr>
                        <td align="center" style="padding: 20px 0;">
                            <h1 style="color: #333333; font-size: 36px; margin: 0; font-family: Arial, sans-serif;">You Are Almost There!</h1>
                        </td>
                    </tr>
                    
                    <!-- Description -->
                    <tr>
                        <td align="center" style="padding: 20px 0; color: #666666; font-size: 16px; line-height: 24px;" class="description">
                            Only one step left to become a part of ${Configs.organization.name}'s family. Please enter this verification code in the window where you started creating your account
                        </td>
                    </tr>
                    
                    <!-- Verification Code -->
                    <tr>
                        <td align="center" style="padding: 20px 0;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#e5c2ff; padding: 30px;">
                                <tr>
                                    <td align="center">
                                        <div class="verification-code" style="font-size: 36px; font-weight: bold; color: #333333; font-family: monospace, Arial, sans-serif;">${verificationCode}</div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Validity -->
                    <tr>
                        <td align="center" style="padding: 10px 0; color: #666666; font-size: 14px;">
                            This code is valid for the next 15 minutes.
                        </td>
                    </tr>
                    
                    <!-- Alternative Text -->
                    <tr>
                        <td align="center" style="padding: 20px 0; color: #666666; font-size: 16px;" class="alternative-text">
                            Or click on the button below to verify your email
                        </td>
                    </tr>
                    
                    <!-- Button -->
                    <tr>
                        <td align="center" style="padding: 20px 0;">
                            <table border="0" cellpadding="0" cellspacing="0" class="button">
                                <tr>
                                    <td align="center" style="border-radius: 4px;" bgcolor="#794C9C">
                                        <a href="http://example.com/verify" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 40px; border-radius: 4px; display: inline-block;">Confirm my email</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Help Text -->
                    <tr>
                        <td align="center" style="padding: 20px 0; color: #666666; font-size: 16px;" class="help-text">
                            Have a question or trouble logging in? Please contact us <a href="http://example.com/help" style="color: #794C9C;">here</a>.
                        </td>
                    </tr>
                    
                    <!-- Footer Logo -->
                    <tr>
                        <td align="center" style="padding: 40px 0 20px 0;">
                            <img src="${await TMHCloud.optimizeAsset("logo_on_transparent")}" alt="${Configs.organization.name}" style="width: 150px; height: auto;"/>
                        </td>
                    </tr>
                    
                    <!-- Address -->
                    <tr>
                        <td align="center" style="padding: 0 0 10px 0; color: #666666; font-size: 14px;">
                            800 Bordway Suit 1500 New York, NY 000423, USA
                        </td>
                    </tr>
                    
                    <!-- Phone -->
                    <tr>
                        <td align="center" style="color: #999999; font-size: 14px;">
                            Call us - 0800 000 900
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `
}