import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  options: {
    // options regarding priority, delay comes here, from
    // the library bull
    delay: 5000,
    priority: 3
  },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'Node Redis Demo <test@mail.com',
      to: `${user.name} <${user.email}`,
      subject: 'Cadastro de usuário no meu site',
      html: `Olá ${user.name}! Bem-vindo ao meu site!`
    });
  }
}