document.addEventListener('DOMContentLoaded', function() {
    var btncb = document.querySelector('#btncb');
    var paiement_cb = document.querySelector('#paiement_cb');
    
    btncb.addEventListener('click', function() {
      if (paiement_cb.style.display === 'block') {
        paiement_cb.style.display = 'none';
      } else {
        paiement_cb.style.display = 'block';
      }
      btncb.classList.toggle('rond_empty');
      btncb.classList.toggle('rond_choice');
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const btnpaypal = document.querySelector('#btnpaypal');
    var paiement_paypal = document.querySelector('#paiement_paypal');
    
    btnpaypal.addEventListener('click', function() {
      if (paiement_paypal.style.display === 'block') {
        paiement_paypal.style.display = 'none';
      } else {
        paiement_paypal.style.display = 'block';
      }
      btnpaypal.classList.toggle('rond_empty');
      btnpaypal.classList.toggle('rond_choice');
    });
  });