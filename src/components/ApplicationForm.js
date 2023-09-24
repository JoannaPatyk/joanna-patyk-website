import React from 'react';
import Button from './Button';
import DisplaySquares from './DisplaySquares';
import DisplayImages from './DisplayImages';
import contactSquares from '../utils/contactSquares';
import contactImages from '../utils/contactImages';
import websiteTypes from '../utils/websiteTypes';
import formElements from '../utils/formElements';
import { HiOutlineMailOpen } from 'react-icons/hi';
import '../css/applicationForm.css';

function ApplicationForm() {
    const displayCheckbox = websiteTypes.map(({ id, label }) => {
        return (
            <label key={id} className="checkbox-container" htmlFor={id}>
                <input type="checkbox" id={id} />
                <span className="checkmark"></span>
                {label}
            </label>
        );
    });

    return (
        <div className="form-container">
            <form className="contact-form">
                <h1>
                    Zachęcam do skorzystania z <span>formularza kontaktowego</span>
                </h1>
                <h2>
                    Napisz, chętnie <span>odpowiem na Twoje pytania!</span> Skontaktuj się w dowolnym momencie, a
                    postaram się pomóc.
                </h2>
                <h3>
                    Poniżej znajduje się formularz zgłoszeniowy zawierający kilka pytań.{' '}
                    <span>Udzielenie odpowiedzi na nie umożliwi przesłanie wstępnej wyceny.</span> Ostateczne koszty
                    zostaną przedstawione po ustaleniu szczegółów.
                </h3>
                <h4>
                    Jeśli wolisz komunikację mailową, możesz napisać na adres:
                    <a href="mailto:joannakosjose@gmail.com">
                        <HiOutlineMailOpen className="email-icon" />
                    </a>
                </h4>

                <div className="questions">
                    <div className="question">
                        <label htmlFor="email"> 1. Jakiego rodzaju strona Cię interesuje?</label>
                        {displayCheckbox}
                    </div>

                    {formElements.map(({ id, label, type, placeholder }) => (
                        <div key={id} className="question">
                            <label htmlFor={id}>{label}</label>
                            {type === 'textarea' ? (
                                <textarea id={id} placeholder={placeholder}></textarea>
                            ) : (
                                <input id={id} type={type} placeholder={placeholder} />
                            )}
                        </div>
                    ))}

                    <label className="checkbox-container" htmlFor="agreement">
                        <input type="checkbox" id="agreement" />
                        <span className="checkmark"></span>
                        <p>
                            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych
                            osobowych w związku z realizacją zgłoszenia.
                        </p>
                    </label>
                </div>
                <Button nextClass="application-btn" type="submit">
                    wyślij
                </Button>
            </form>
            <DisplayImages elements={contactImages} />
            <DisplaySquares elements={contactSquares} />
        </div>
    );
}

export default ApplicationForm;