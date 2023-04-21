const BlogPage = () => {
  return (
    <div className="min-h-screen py-32 bg-zinc-200 text-zinc-900 flex flex-col items-center justify-start">
      <div className="flex flex-col items-center justify-center gap-6 max-w-5xl px-10">
        <h2 className="text-3xl"> {blogPageContent.header}</h2>
        <p className="text-xl text-center">{blogPageContent.body}</p>
      </div>
    </div>
  );
};

export default BlogPage;

const blogPageContent = {
  header: `WHAT IS "MIDDLE GROUND"?`,
  body: `MIDDLE GROUND - Treatment & Training is indicative of the type of work that I do & my overall personality. My experience has led me to believe that you need both, Treatment & Training. The key to health & growth is to find a middle ground & maintain balance. Now these are very broad topics, and the world of 'fitness' and 'wellness' can be very VERY murky. My goal is to help you find YOUR MIDDLE GROUND.

  What works for you? How can you best take care of your body? I am an advocate for you. You only have one human body for this lifetime, and I think it is imperative to take care of it. Consider this; At some point in your life you will get injured or have a health scare or get sick & when that happens nothing else will matter, except for your health & well-being.
  
  That is when you will visit multiple doctors, try various medications, get tests & scans done, attempt to navigate the Western medicine & American healthcare system. Now, whether you receive a final diagnosis or not, you still struggle with some remnant of pain or restriction, be it physical or mental. And then eventually, you will start diving into Eastern medicine & preventative healthcare.
  
  Your doctor will have told you to exercise & eat right, so you try. You will try going to a chiropractor for low back pain, you'll try acupuncture for your headaches, and you'll be rubbing essential oils on your wrists while you drink a poorly flavored concoction of 'vitamins' each morning. And then what? Do you feel better? Maybe you do, and that's great! That's the goal, isn't it? To cure yourself, right?
  
  All that said… I am not trying to put-down any type of doctor or practitioner or product because I think there are amazing options out there that I have personally tried & still use & would advocate for. I am trying to invoke a different way to assess your health & well-being. Because I think the bottom line is, a human being does not know how to take care of a human body! We simply don't know. We don't know what will hurt or what will help. We might know a little bit given a specific set of circumstances, but we still rely on outside sources to tell us about our internal being.
  
  This is how we end up on one side of the spectrum of health & lost in the mix of what's good or bad, healthy or unhealthy. This is my motivation. This is what I want to help with. This is the premise behind MIDDLE GROUND. Finding your middle ground, so that you are in control of your body.`,
};
