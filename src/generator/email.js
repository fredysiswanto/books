import { randomEmail } from './helperGenerator.js';
const generatorEmail = (request, h) => {
  const { domain } = request.params;
  const result = randomEmail(domain);
  const data = {
    status: 'success',
    data: {
      email: result,
    },
  };
  return data;
};

export default generatorEmail;
