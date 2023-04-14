import morgan from 'morgan';

export default morgan(
  '[:date[clf]] :method :url status::status length::res[content-length] - :response-time ms'
);
