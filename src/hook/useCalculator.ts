import { useState, useEffect, SetStateAction } from "react";

export const useCalculator = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [lastNumber, setLastNumber] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [displayValue, setDisplayValue] = useState("0");
  const [calculated, setCalculated] = useState(false);
  
  // Estado donde se guarda la operación completa para mostrarla en el display ;)
  const [operationDisplay, setOperationDisplay] = useState<string | null>(null);

  useEffect(() => {
    const formatNumber = (num: string) => {
      if (num === "0") return "0";
      if (num.includes(".")) {
        const parts = num.split(".");
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + parts[1];
      }
      return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    setDisplayValue(formatNumber(currentNumber));
  }, [currentNumber]);

  const handleNumberPress = (num: SetStateAction<string>) => {
    if (calculated) {
      setCurrentNumber(num);
      setCalculated(false);
      return;
    }

    if (currentNumber === "0") {
      setCurrentNumber(num);
    } else {
      setCurrentNumber(currentNumber + num);
    }
  };

  const handleOperationPress = (op: string) => {
    if (currentNumber === "0" && !lastNumber) return;

    if (operation && !calculated) {
      // Guardar la operación actual para mostrarla
      const formattedLastNumber = lastNumber?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      const formattedCurrentNumber = currentNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setOperationDisplay(`${formattedLastNumber} ${operation} ${formattedCurrentNumber}`);
      
      // Calcular el resultado
      calculate();
      
      // Configurar para la siguiente operación
      setLastNumber(currentNumber);
      setOperation(op);
      setCalculated(true);
    } else {
      setLastNumber(currentNumber);
      setOperation(op);
      setCurrentNumber("0");
      setCalculated(false);
    }
  };

  const calculate = () => {
    if (!operation || !lastNumber) return;

    const current = parseFloat(currentNumber);
    const last = parseFloat(lastNumber);
    let result = 0;

    switch (operation) {
      case "+":
        result = last + current;
        break;
      case "-":
        result = last - current;
        break;
      case "×":
        result = last * current;
        break;
      case "÷":
        result = last / current;
        break;
      case "%":
        result = (last * current) / 100;
        break;
      default:
        return;
    }

    // Guardar la operación completa para mostrarla
    const formattedLastNumber = lastNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const formattedCurrentNumber = currentNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setOperationDisplay(`${formattedLastNumber} ${operation} ${formattedCurrentNumber}`);
    
    // Actualizar el resultado
    setCurrentNumber(result.toString());
    setOperation(null);
    setCalculated(true);
  };

  const handleEquals = () => {
    if (operation && lastNumber) {
      calculate();
    }
  };

  const handleClear = () => {
    setCurrentNumber("0");
    setLastNumber(null);
    setOperation(null);
    setCalculated(false);
    setOperationDisplay(null);
  };

  const handlePlusMinus = () => {
    setCurrentNumber((parseFloat(currentNumber) * -1).toString());
  };

  const handlePercent = () => {
    setCurrentNumber((parseFloat(currentNumber) / 100).toString());
  };

  const handleDecimal = () => {
    if (!currentNumber.includes(".")) {
      setCurrentNumber(currentNumber + ".");
    }
  };

  const handleBackspace = () => {
    if (
      currentNumber.length === 1 ||
      (currentNumber.length === 2 && currentNumber.includes("-"))
    ) {
      setCurrentNumber("0");
    } else {
      setCurrentNumber(currentNumber.slice(0, -1));
    }
  };

  return {
    displayValue,
    operationDisplay,
    handleNumberPress,
    handleOperationPress,
    handleEquals,
    handleClear,
    handlePlusMinus,
    handlePercent,
    handleDecimal,
    handleBackspace,
  };
};