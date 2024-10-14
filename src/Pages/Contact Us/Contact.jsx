import React from 'react';

const Contact = () => {
    return (
        <div className="box-border w-1/2 center">
            <label className="input input-bordered flex items-center gap-2 mt-10 mb-2">
  Name
  <input type="text" className="grow" placeholder="Your Name" />
</label>
<label className="input input-bordered flex items-center gap-2 mb-2">
  Email
  <input type="text" className="grow" placeholder="Your Email" />
</label>
<label className="input input-bordered flex items-center gap-2 mb-2">
  <input type="text" className="grow" placeholder="Mobile No." />
  
</label>
<button className="btn btn-success">Submit</button>
        </div>
    );
};

export default Contact;