import React from 'react';

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={'Dipankar'}
          feedback={'Your skills are good. Keep it Up.'}
        />

        <TestimonialCard
          name={'Nilanjan'}
          feedback={'Your knowledge is good. Keep practicing.'}
        />
        <TestimonialCard
          name={'Writick'}
          feedback={'Your website lokks very good.'}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
