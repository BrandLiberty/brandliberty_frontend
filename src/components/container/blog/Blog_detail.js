import React, { useEffect, useState } from 'react';
import '../../assets/css/containers/blogdetail.css'
import Loader from '../../screen/loader';
import dban_img from "../../assets/images/vision.jpg";
import d_img1 from "../../assets/images/BLVision.jpg";
import ScrollTopButton from '../../atoms/ScrollTopButton';


const Blog_detail = () => {
  const [showPageLoader, setShowPageLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPageLoader(false);
    }, 1650);
  }, []);

  if (showPageLoader) {
    return <Loader />;
  } else {
    return (
      <div className="blogdetail-container-main">
        <div className="blogdetail-container">
          <div className="blogdetail-text-main">

            <div className="blogdetail-paregraph">
              <div className="blogdetail-content-main">
                <img src={dban_img} className="detail_img1" />
                <p className="blogdetail-heder">What has happened to all of the IT Sector</p>
                <div className="blogdetail-line" />
                <div className="blogdetail-content-main-text">
                  <p className="blogdetail-paregraph-text1">
                    Hey there, fellow tech adventurers!
                    Ready to dive into the thrilling world of IT website development? Buckle up, because we are about to embark on a wild ride through codes, pixels, and virtual landscapes. Whether you’re a curious cat or a coding ninja, this blog is your backstage pass to the captivating realm of crafting websites in the digital age.

                    Strap on your Developer Hat: it's Code O’Clock! Okay, let's get real. IT website development isn't just about typing lines of code like a mad scientist. Well, maybe just a little bit. It's like building a virtual skyscraper, where each line of code is a brick. We are talking HTML, CSS, JAVASCRIPT, and all those funky acronyms that make the magic happen.

                    Remember, it’s not about how fast you type; it’s about how creatively you think. So put on your developer hat and let’s bring those virtual worlds to life!

                  </p>
                  <br />
                  <p className="blogdetail-paregraph-text1">
                    {" "}
                    Pixels meet creativity: Designing the Digital Dazzle Close your eyes and imagine a sleek website. Open your eyes and take the time to design it! Designing an IT website isn’t just about pretty pictures and eye-catching colors - it’s about creating an experience. We’re talking about user interfaces that are smoother than butter and layouts that guide visitors like GPS for their thumbs. Think of it as the ultimate canvas where creativity meets practicality. It’s the virtual version of interior design for the digital age. So, get that creative juice flowing, and let’s make some digital art!


                  </p>
                  <div className="blogdetail-main-images1">
                    <div className="blogdetail-content-main1">
                      <img src={d_img1} className="detail_img2 " />
                    </div>
                  </div>


                  <div className="blogdetail-texts1">

                    <p className="blogdetail-pr-text">
                      Errors, Bugs, and Debugging: The Roller Coaster Ride So, let’s not sugarcoat it - the journey won’t always be sailing. Brace yourself for the roller coaster ride of debugging. Imagine chasing down a bug like a cat chasing a laser pointer- frustrating yet oddly satisfying when you catch it. The IT world is like a wonderland - there’s always a twist around the corner. But guess what? Each bug you conquer is a victory dance waiting to happen.
                      The Aha moments when the website comes alive Picture this: You’ve been toiling away, tweaking codes, fixing bugs, and suddenly..it happens. Your website comes alive! Button clicks, images glide, and forms actually submit data. These ‘aha’ moments are what keep developers hooked. The thrill of seeing your virtual brainchild functional is indescribable. So, celebrate those victories- you’ve earned!


                    </p>
                  </div>



                  <div className="blogdetail-texts1">

                    <p className="blogdetail-pr-text no-text1">
                      IT website development is like a never-ending adventure, where each line of code is a step into the unknown. From crafting layouts to coming alive. So, whether you are a coding rookie or a seasoned pro, remember that the digital universe is your Playground- Go forth and build wonders!

                      With Creativity, BrandLiberty.
                    </p>
                  </div>

                  <div className="blogdetail-texts1">

                    <p className="blogdetail-pr-text text-p1">
                      P.S.- And that's a wrap, fellow adventurers! Happy coding!
                    </p>
                  </div>
                </div>

              </div>

              <div className="blogdetail-line1" />

            </div>
          </div>
        </div>
        {/* Scroll-to-top button */}
        <ScrollTopButton />
      </div>
    )
  }
}

export default Blog_detail
