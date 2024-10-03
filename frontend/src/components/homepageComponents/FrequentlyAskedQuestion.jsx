import React from "react";

export default function FrequentlyAskedQuestion() {
  return (
    <>
      <div className="accordin-wrap">
        <div className="accordion" id="accordionExample">
          <div className="q">
            <div
              className="faq"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="text">What services do you offer?</div>
              <div className="expand-sign">+</div>
            </div>
            <div
              id="collapseOne"
              class="collapse answer"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              Good Question. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo recusandae, adipisci veniam odit vero quod reprehenderit tempora, in, iste itaque. Magni mollitia consequuntur, cum obcaecati nesciunt expedita! Assumenda ipsa natus blanditiis fuga nemo maiores ipsam consequuntur sunt voluptate laboriosam commodi qui, voluptates in possimus, id quis, harum aliquam optio.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
