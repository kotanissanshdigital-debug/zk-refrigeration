
document.addEventListener('DOMContentLoaded', function(){
  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });

  // simple intersection observer to animate gallery images
  const imgs = document.querySelectorAll('.gallery-grid img');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(ent=>{
      if(ent.isIntersecting){ ent.target.style.opacity=1; ent.target.style.transform='translateY(0)'; }
    });
  },{threshold:0.15});
  imgs.forEach(i=>obs.observe(i));

  // contact form: send via mailto as fallback
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.querySelector('[name=name]').value || 'No name';
      const phone = form.querySelector('[name=phone]').value || '';
      const service = form.querySelector('[name=service]').value || '';
      const message = form.querySelector('[name=message]').value || '';
      const to = 'zishanali2233445@gmail.com';
      const subject = encodeURIComponent('Website enquiry from ' + name);
      const body = encodeURIComponent('Name: '+name+'\nPhone: '+phone+'\nService: '+service+'\nMessage: '+message);
      // try fetch to a form endpoint could go here; fallback to mailto
      window.location.href = 'mailto:'+to+'?subject='+subject+'&body='+body;
      // show simple thank you popup
      alert('Thank you for contacting ZK Refrigeration! We will get back to you soon.');
      form.reset();
    });
  }
});
