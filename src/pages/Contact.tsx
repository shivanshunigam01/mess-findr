import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = () => {
    toast({ title: "Message sent", description: "We will get back to you soon." });
    reset();
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us — The Daily Plate</title>
        <meta name="description" content="Get in touch with The Daily Plate team. We'd love to hear from you." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <Navbar />
      <main className="container py-12 grid gap-10 md:grid-cols-2">
        <section>
          <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3 max-w-md">
            <Input placeholder="Name" {...register("name", { required: true })} />
            <Input type="email" placeholder="Email" {...register("email", { required: true })} />
            <Textarea placeholder="Message" rows={5} {...register("message", { required: true })} />
            <Button type="submit">Send</Button>
          </form>
          <div className="mt-6 text-sm text-muted-foreground">
            <p>Email: hello@dailyplate.app</p>
          </div>
        </section>
        <section className="rounded-lg overflow-hidden border">
          <iframe
            title="The Daily Plate location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.597764700217!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v0000000000000"
            className="w-full h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
