import '../Terms/Terms.css';



export const Terms = () => {
    return (
        <div id='terms'>
            <section>
                {/* Image */}
                <div className="titleImg">
                    <img src="img/Terms/terms3.png" alt="Terms and Conditions"/>   
                </div>

            <div className='container'>
                {/* Attention */}
                <div className='attention'>
                    <div>THESE TERMS AND CONDITIONS APPLY TO THE WEB SITE www.sithumsago.lk</div>
                </div>

                {/* Cockies */}
                <div className='block'>
                    <div className='block-title'>Cockies</div>
                    <div className='block-description'>We employ the use of cookies. By using our site's website you consent to the use of 
                        cookies in accordance with our site’s privacy policy. Most of the modern day interactive 
                        web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas
                         of our site to enable the functionality of this area and ease of use for those people visiting. 
                         Some of our affiliate / advertising partners may also use cookies.</div>
                    </div>

                {/* License */}
                <div className='block'>
                    <div className='block-title'>License</div>
                    <div className='block-description'>
                    Unless otherwise stated,us. and/or it’s licensors own the intellectual property rights for all material on us. All intellectual property rights are reserved.
                     You may view and/or print pages from www.sitedomain.lk for your own personal use subject to restrictions set in these terms and conditions.
                     <br/><br/>
                    You must not:<br/><br/>
                            1. Republish material from www.site.lk<br/>
                            2. Sell, rent or sub-license material from www.site.lk<br/>
                            3. Reproduce, duplicate or copy material from www.site.lk<br/><br/>

                    Redistribute content from site (Pvt) Ltd. (unless content is specifically made for redistribution).
                    </div>
                </div>
                
                {/* CCPA */}
                <div className='block'>
                    <div className='block-title'>CCPS Privacy Rights (Do Not Sell My Personal Information) </div>
                    <div className='block-description'>
                    Under the CCPA, among other rights, California consumers have the right to:Request that a business that 
                    collects a consumer’s personal data disclose the categories and specific pieces of personal data that a business 
                    has collected about consumers.Request that a business delete any personal data about the consumer that a 
                    business has collected.Request that a business that sells a consumer’s personal data, not sell the consumer’s 
                    personal data.If you make a request, we have one month to respond to you. If you would like to exercise any of 
                    these rights,please contact us.
                    </div>
                </div>

                {/* Content Liability */}
                <div className='block'>
                    <div className='block-title'>Content Liability</div>
                    <div className='block-description'>
                    We shall have no responsibility or liability for any content appearing on your Web site. You agree to 
                    indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear
                    on any page on your Web site or within any context containing content or materials that may be interpreted as 
                    libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other 
                    violation of, any third party rights.
                    </div>
                </div>
                </div>
            </section>    
        </div>
    );
}