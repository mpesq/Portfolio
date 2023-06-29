import React from "react";
import "./Button.css";

const Button = ({
                    disableShadow,
                    variant,
                    children,
                    disabled,
                    startIcon,
                    endIcon,
                    size,
                    color
                }) => {
    const renderIcon = (iconName) => (
        <span className="material-symbols-outlined">{iconName}</span>
    );

    const getButtonClasses = () => {
        let buttonClasses = "btn";
        buttonClasses += ` ${variant}`;
        buttonClasses += disableShadow ? " disableShadow" : "";
        buttonClasses += startIcon || endIcon ? " icon" : "";
        buttonClasses += size === "sm" ? " sm" : "";
        buttonClasses += size === "md" ? " md" : "";
        buttonClasses += size === "lg" ? " lg" : "";
        buttonClasses += color === "default" ? " default" : "";
        buttonClasses += color === "primary" ? " primary" : "";
        buttonClasses += color === "secondary" ? " secondary" : "";
        buttonClasses += color === "danger" ? " danger" : "";
        return buttonClasses;
    };

    return (
        <button className={getButtonClasses()} disabled={disabled}>
            {startIcon && renderIcon("add_shopping_cart")}
            {children}
            {endIcon && renderIcon("add_shopping_cart")}
        </button>
    );
};

export default Button;
