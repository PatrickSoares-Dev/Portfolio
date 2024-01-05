import React, { useState } from "react";
import emailJs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contato() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    function validateForm() {
        let isValid = true;

        if (!email || !subject || !message) {
            setError("Preencha todos os campos");
            isValid = false;
        }

        // Validar formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Formato de e-mail inválido");
            isValid = false;
        }

        // Validar comprimento mínimo dos campos
        const minSubjectLength = 4;
        const minMessageLength = 10;

        if (subject.length < minSubjectLength) {
            setError(`O assunto deve ter no mínimo ${minSubjectLength} caracteres`);
            isValid = false;
        }

        if (message.length < minMessageLength) {
            setError(`A mensagem deve ter no mínimo ${minMessageLength} caracteres`);
            isValid = false;
        }

        if (!isValid) {
            // Destacar campos incorretos com borda vermelha
            if (!email) document.getElementById('email').classList.add('border-red-500');
            if (subject.length < minSubjectLength) document.getElementById('subject').classList.add('border-red-500');
            if (message.length < minMessageLength) document.getElementById('message').classList.add('border-red-500');
        }

        return isValid;
    }

    function sendEmail(e) {
        e.preventDefault();

        // Remover classes de borda vermelha antes de validar novamente
        document.getElementById('email').classList.remove('border-red-500');
        document.getElementById('subject').classList.remove('border-red-500');
        document.getElementById('message').classList.remove('border-red-500');

        if (!validateForm()) {
            return;
        }

        let serviceId = "service_o7tk43m";
        let templateId = "template_bt6rgbd";
        let publicKey = "lq-Qaq4EJzc0-oUgV";

        const templateParams = {
            from_name: subject,
            email: email,
            message: message,
        };

        emailJs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("EMAIL ENVIADO", response.status, response.text);
                setSuccessMessage("Email enviado com sucesso!");
                setSubject('');
                setEmail('');
                setMessage('');
                setError('');
            })
            .catch((err) => {
                console.log("Error", err);
                setError("Erro ao enviar o email. Tente novamente mais tarde.");
            });
    }

    return (
        <section id="contato">
            <div className="justify-center items-center pb-16 pt-12 bg-gray-800 mx-auto max-w-screen-md">
                <h2 className="text-white text-3xl md:text-2xl sm:text-4xl text-center align-center font-bold b-opacity-20 rounded-lg p-4 mt-4 ">Contato</h2>

                <p className="mb-12 font-normal text-center text-base text-white sm:text-xl">
                    Meu portfólio despertou seu <span className="font-semi-bold text-lime-400">interesse?</span> Estou aberto para discutir <span className="font-semi-bold text-lime-400">oportunidades</span> de colaboração, <span className="font-semi-bold text-lime-400">entrevistas ou processos seletivos</span>. Vamos nos conectar!
                </p>
                <div className="py-4 px-4 mx-auto max-w-screen-md bg-black bg-opacity-10 rounded-2xl border-b border-l border-lime-500">
                    <form action="" className="form space-y-8 w-50 rounded-2xl p-4" onSubmit={sendEmail}>

                        <div className="flex items-center justify-center">                        
                            <ul className="flex align-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                                <li>
                                    <a href="https://www.linkedin.com/in/patricksoares-dev/" target="_blank" className="hover:underline me-4 md:me-6 text-white hover:text-lime-500">
                                        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/PatrickSoares-Dev" target="_blank" className="hover:underline me-4 md:me-6 text-white hover:text-lime-500">
                                        <FontAwesomeIcon icon={faGithub} size="2xl" />
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:patrickoliveiramoto@gmail.com" target="_blank" className="hover:underline hover:text-lime-500 me-4 md:me-6 text-white">
                                        <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {error && <div className="text-white bg-red-600 rounded-2xl p-4">{error}</div>}
                        {successMessage && <div className="text-white bg-lime-600 rounded-2xl p-4">{successMessage}</div>}

                        <div>
                            <label htmlFor="email" className="block mb-2 text-lg md:text-lg sm:text-lg font-medium text-white">Seu email</label>
                            <input type="email" id="email"
                                className="w-full text-sm text-gray-900 bg-gray-0 rounded-lg shadow-sm border border-gray-300 focus:ring-lime-500 focus:border-lime-500"
                                placeholder="Seu e-mail (para entrar em contato)"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block mb-2 text-lg md:text-lg sm:text-lg font-medium text-white">Assunto: </label>
                            <input type="text" id="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-lime-500 focus:border-lime-500"
                                placeholder="Assunto (entrevista, oportunidade, etc.)"
                                onChange={(e) => setSubject(e.target.value)}
                                value={subject}
                                required />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-lg md:text-lg sm:text-lg  font-medium text-white">Sua mensagem</label>
                            <textarea id="message" rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-lime-500 focus:border-lime-500"
                                placeholder="Sua Mensagem (inclua empresa, informações adicionais, etc.)"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            ></textarea>
                        </div>

                        <button type="submit" id="btnSubmit" className="py-3 px-5 text-md md:text-md sm:text-md font-medium text-center text-white rounded-lg sm:w-fit hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-lime-300">Envie uma mensagem</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
