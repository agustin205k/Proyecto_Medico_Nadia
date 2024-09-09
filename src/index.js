import app from './app.js';
import {connectDB} from './db.js';

connectDB();
if(connectDB()){
  console.log("DB is connected");
}
app.listen(3000);
console.log('Server on port', 3000);