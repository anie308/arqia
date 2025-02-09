import { Configs } from "../../configs"
import { TMHCloud } from "../../service/cloudinary"

export const welcomeEmail= async (firstName:string, lastName?:string)=>{
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Welcome to Omnisend</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <style type="text/css">
        @media only screen and (max-width: 600px) {
            .main-table {
                width: 100% !important;
            }
            .content-table {
                width: 100% !important;
                padding: 20px !important;
            }
            .logo {
                width: 120px !important;
            }
            h1 {
                font-size: 24px !important;
                line-height: 30px !important;
            }
            .checklist {
                padding: 0 10px !important;
            }
            .cta-button {
                width: 100% !important;
            }
            .cta-button a {
                display: block !important;
                padding: 15px 10px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f9f9f9;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="main-table" style="font-family: Arial, sans-serif;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table border="0" cellpadding="0" cellspacing="0" width="600" class="content-table" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <!-- Logo -->
                    <tr>
                        <td align="left" style="padding: 30px 40px;">
                            <img src="${await TMHCloud.optimizeAsset("logo_on_transparent")}" alt="Omnisend" class="logo" style="width: 150px; height: auto;"/>
                        </td>
                    </tr>
                    
                    <!-- Confetti Decoration -->
                <!-- <tr>
                        <td style="position: relative;">
                            <div style="position: absolute; top: 0; right: 0;">
                                <p style="width: 100px; height: auto;"></p>
                            </div>
                        </td>
                    </tr>  -->
                    
                    <!-- Welcome Message -->
                    <tr>
                        <td align="left" style="padding: 20px 40px;">
                            <h1 style="color: #333333; font-size: 32px; margin: 0; font-weight: 600;">We're glad to see you, ${firstName} 🎉</h1>
                            <p style="color: #666666; font-size: 16px; line-height: 24px; margin-top: 10px;">
                                Welcome to ${Configs.organization.name}, let's jump in and get a head start! 👋
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Next Steps -->
                    <tr>
                        <td align="left" style="padding: 20px 40px;">
                            <p style="color: #333333; font-size: 18px; font-weight: 600; margin: 0;">Up next: Financial education essentials</p>
                        </td>
                    </tr>
                    
                    <!-- Checklist -->
                    <tr>
                        <td align="left" class="checklist" style="padding: 10px 40px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <!-- Set up account -->
                                <tr>
                                    <td style="padding: 10px 0;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td width="24" style="vertical-align: top;">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Eo_circle_purple_white_checkmark.svg" alt="checkmark icon" style="width: 20px; height: 20px;"/>
                                                </td>
                                                <td style="color: #333333; font-size: 16px; font-weight: 500;">Set up your account</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                
                                <!-- Get started with Google -->
                                <tr>
                                    <td style="padding: 10px 0;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td width="24" style="vertical-align: top;">
                                                    <div style="width: 18px; height: 18px; border: 2px solid #e0e0e0; border-radius: 4px;"></div>
                                                </td>
                                                <td>
                                                    <p style="color: #333333; font-size: 16px; font-weight: 500; margin: 0;">Get started at ${Configs.organization.name}</p>
                                                    <ul style="color: #666666; font-size: 14px; margin: 5px 0 0 0; padding-left: 20px;">
                                                        <li>Set up your profile</li>
                                                        <li>Browse various communities</li>
                                                        <li>Connect with a mentor</li>
                                                        <li>Continue learning</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- CTA Button -->
                    <tr>
                        <td align="left" style="padding: 30px 40px;">
                            <table border="0" cellpadding="0" cellspacing="0" class="cta-button">
                                <tr>
                                    <td align="center" style="background-color: #794c9c; border-radius: 4px;">
                                        <a href="http://example.com/start" target="_blank" 
                                           style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; 
                                                  text-decoration: none; padding: 12px 40px; display: inline-block; 
                                                  font-weight: 500;">
                                            Visit your dashboard
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Why these steps -->
                    <tr>
                        <td align="left" style="padding: 20px 40px;">
                            <p style="color: #333333; font-size: 16px; font-weight: 500; margin: 0;">Why these steps?</p>
                            <p style="color: #666666; font-size: 14px; line-height: 20px; margin-top: 10px;">
                                During tests, it was proven that these tasks make a lot, and only about 2% become financially proficient . These steps will accelerate your learning at ${Configs.organization.name}.
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Help Text -->
                    <tr>
                        <td align="left" style="padding: 20px 40px 40px;">
                            <p style="color: #666666; font-size: 14px; margin: 0;">
                                If you have any questions, simply reply to this message or contact us at<br/>
                                <a href="mailto:support@omnisend.com" style="color: #794c9c; text-decoration: none;">support@tradersmentorshub.com</a>
                            </p>
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