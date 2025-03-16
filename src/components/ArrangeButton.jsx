import React from "react";

export default function ArrangeButton({text}) {
    const handleClick = () => {
        const encodedText = encodeURIComponent(text);
        const url = `https://t.me/MyThaiCompany?text=${encodedText}`;

        window.Telegram?.WebApp
            ? window.Telegram.WebApp.openTelegramLink(url)
            : window.open(url, '_blank');
    };

    return (
        <div className='arrange-btn overflow-visible' onClick={handleClick}>
            ОФОРМИТЬ
        </div>
    )
}