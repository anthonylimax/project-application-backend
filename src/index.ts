import app from "./app";
import { postRoute } from "./Frameworks/routes/createNoticeRoute";
postRoute(app);
app.listen(process.env.PORT);

