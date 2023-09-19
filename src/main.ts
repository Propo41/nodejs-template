import 'module-alias/register';
import { app } from '@base/app';
import helmet from 'helmet';

let port = process.env.PORT || 4000;

app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
