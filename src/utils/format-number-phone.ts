export const formatNumberPhone = (phone: string) => {
  if (!/^\d{13}$/.test(phone)) {
    return "Número de telefone inválido";
  }
  return phone.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})$/, "+$1 ($2) $3-$4");
};
