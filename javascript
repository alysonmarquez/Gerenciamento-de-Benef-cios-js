function goToAndFinalPage(value){
  goToPage = value;
  finalPage = 40; //pagina de atendimento.
}
  
if(runOnce){
   showUploadedFiles = true;
  //console.log(data);
}
 
if (continueClicked && currentPage == goToPage) {
  goToPage = 40;
  finalPage = 40; //pagina de atendimento.
}
 
// Code to run on the first page
if (continueClicked && currentPage == 1) {
  if (data.sltATENDIMENTO === "Alteração cadastral" && data.sltCATEGORIA === "Assistência Médica") {
    goToAndFinalPage(2);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Acesso ao aplicativo" && data.sltCATEGORIA === "Assistência Médica") {
    goToAndFinalPage(3);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Exclusão de dependentes" && data.sltCATEGORIA === "Assistência Médica") {
    goToAndFinalPage(4);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Inclusão de dependentes" && data.sltCATEGORIA === "Assistência Médica") {
    goToAndFinalPage(5);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Rede Referenciada" && data.sltCATEGORIA === "Assistência Médica") {
    goToAndFinalPage(6);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Informações sobre Descontos" && data.sltCATEGORIA === "Assistência Médica") {
    goToAndFinalPage(7);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Informações sobre Reembolso" && data.sltCATEGORIA === "Assistência Médica") {
    goToAndFinalPage(8);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Solicitação do vale" && data.sltCATEGORIA === "Vale Transporte") {
    goToAndFinalPage(9);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Cancelamento" && data.sltCATEGORIA === "Vale Transporte") {
    goToAndFinalPage(10);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Prazo de entrega" && data.sltCATEGORIA === "Vale Transporte") {
    goToAndFinalPage(11);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Reajuste de Tarifa" && data.sltCATEGORIA === "Vale Transporte") {
    goToAndFinalPage(12);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Solicitação de 2ª Via" && data.sltCATEGORIA === "Vale Transporte") {
    goToAndFinalPage(13);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Dúvidas / Orientações" && data.sltCATEGORIA === "Vale Transporte") {
    goToAndFinalPage(14);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Informação sobre Liberação de Créditos" && data.sltCATEGORIA === "Vale Transporte") {
    goToAndFinalPage(15);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Solicitação" && data.sltCATEGORIA === "Lincard (Grêmio Virtual)") {
    goToAndFinalPage(16);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Cancelamento" && data.sltCATEGORIA === "Lincard (Grêmio Virtual)") {
    goToAndFinalPage(17);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Dúvidas/Orientações" && data.sltCATEGORIA === "Lincard (Grêmio Virtual)") {
    goToAndFinalPage(18);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Prazo de Entrega" && data.sltCATEGORIA === "Cartão Flash") {
    goToAndFinalPage(19);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Distribuição de Valores" && data.sltCATEGORIA === "Cartão Flash") {
    goToAndFinalPage(20);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Dúvidas / Orientações" && data.sltCATEGORIA === "Cartão Flash") {
    goToAndFinalPage(21);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Informação sobre Liberação de Créditos" && data.sltCATEGORIA === "Cartão Flash") {
    goToAndFinalPage(22);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Alteração cadastral" && data.sltCATEGORIA === "Assistência Odontológica") {
    goToAndFinalPage(23);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Exclusão de dependentes" && data.sltCATEGORIA === "Assistência Odontológica") {
    goToAndFinalPage(24);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Inclusão de dependentes" && data.sltCATEGORIA === "Assistência Odontológica") {
    goToAndFinalPage(25);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Dúvida/Orientação" && data.sltCATEGORIA === "Assistência Odontológica") {
    goToAndFinalPage(26);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Solicitar Mudança de Plano" && data.sltCATEGORIA === "Assistência Odontológica") {
    goToAndFinalPage(27);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Informações sobre Descontos" && data.sltCATEGORIA === "Assistência Odontológica") {
    goToAndFinalPage(28);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Informações sobre Planos Disponíveis" && data.sltCATEGORIA === "Assistência Odontológica") {
    goToAndFinalPage(29);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Informações sobre Reembolso" && data.sltCATEGORIA === "Assistência Odontológica") {
    goToAndFinalPage(30);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Alteração" && data.sltCATEGORIA === "Vale Alimentação") {
    goToAndFinalPage(31);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Dúvidas / Orientações" && data.sltCATEGORIA === "Vale Alimentação") {
    goToAndFinalPage(32);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Prazo de entrega" && data.sltCATEGORIA === "Vale Alimentação") {
    goToAndFinalPage(33);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Solicitação de 2ª Via" && data.sltCATEGORIA === "Vale Alimentação") {
    goToAndFinalPage(34);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Alteração" && data.sltCATEGORIA === "Vale Refeição") {
    goToAndFinalPage(35);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Dúvidas / Orientações" && data.sltCATEGORIA === "Vale Refeição") {
    goToAndFinalPage(36);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Solicitação de 2ª Via" && data.sltCATEGORIA === "Vale Refeição") {
    goToAndFinalPage(37);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Prazo de entrega" && data.sltCATEGORIA === "Vale Refeição") {
    goToAndFinalPage(38);
    data.BeneficioGeral = true;
  }
  if (data.sltATENDIMENTO === "Alteração Cadastral" && data.sltCATEGORIA === "Seguro de Vida") {
    goToAndFinalPage(39);
    data.BeneficioGeral = true;
  }
}
 
 
// Code to run after submit is clicked
if(submitting){
 data.atenderSolicitacao = null;
  if(data.sltATENDERSOLICITACAO === "Sim"){
  data.contatarEmpresa = true
  }
  else if(data.sltATENDERSOLICITACAO === "Não"){
    data.contatarEmpresa = false
  }
  else{
    console.log("Erro no sistema")
  }
   //console.log(data);
  
}