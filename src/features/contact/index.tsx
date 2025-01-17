import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  return (
    <section className="py-20  bg-[#1A1A1A] text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#e33a07] to-[#ff6b3c]">
            GET IN TOUCH
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#e33a07] to-[#ff6b3c] mx-auto"></div>
        </div>
        <div className="mb-20 text-center">
          <p className="text-white text-2xl md:text-3xl max-w-4xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. The fringed adornment
            enhances the beauty of the alien. A distinctive resting
            characteristic prevails.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <form className="grid grid-cols-1 gap-8">
            <div>
              <Input
                type="text"
                placeholder="Name"
                className="w-full text-black text-xl bg-gray-200 focus:bg-gray-300 transition duration-300"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                className="w-full text-black text-xl bg-gray-200 focus:bg-gray-300 transition duration-300"
              />
            </div>
            <div>
              <Textarea
                placeholder="Message"
                className="w-full text-black text-xl bg-gray-200 focus:bg-gray-300 transition duration-300"
                rows={8}
              />
            </div>
            <div>
              <Button type="submit" className="w-full bg-gradient-to-r from-[#e33a07] to-[#ff6b3c] text-2xl uppercase tracking-wider py-4 rounded-lg hover:from-[#ff6b3c] hover:to-[#e33a07] transition duration-300 transform hover:scale-105">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;