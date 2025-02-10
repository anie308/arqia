import express from "express"
const app = express();
const apiVersion = "/api/v1"

import coreRouter from "../routes/index";
import accountManagementRouter from "../routes/user/account";
import postRouter from "../routes/post";
// const communityRouter = require("../routes/community")
// const communityMembershipRouter = require("../routes/community/membership")
// const lessonRouter = require("../routes/lesson")
// const courseEnrollmentRouter = require("../routes/courseEnrollment")
// const courseRouter = require("../routes/course")
import notificationRouter from "../routes/notification";
// const subscriptionRouter = require("../routes/subscription")
// const transactionRouter = require("../routes/transaction")

//Webhooks
// const financeWebhookRouter = require("../routes/webhooks/finance")
// app.use(`${apiVersion}/webhook/finance`, financeWebhookRouter)


//other routes go here
app.use(`${apiVersion}/account`, accountManagementRouter)
app.use(`${apiVersion}/post`, postRouter)
// app.use(`${apiVersion}/community/m`, communityMembershipRouter)
// app.use(`${apiVersion}/community`, communityRouter)
// app.use(`${apiVersion}/lesson`, lessonRouter)
// app.use(`${apiVersion}/enroll`, courseEnrollmentRouter)
// app.use(`${apiVersion}/course`, courseRouter)
app.use(`${apiVersion}/notification`, notificationRouter)
// app.use(`${apiVersion}/subscription`, subscriptionRouter)
// app.use(`${apiVersion}/transaction`, transactionRouter)


app.use(`${apiVersion}`, coreRouter);

export = app;
