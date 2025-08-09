import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().min(2),
  location: z.string().min(2),
  phone: z.string().min(8),
  mapsUrl: z.string().url(),
  imageUrl: z.string().url().optional(),
  breakfast: z.string().optional(),
  lunch: z.string().optional(),
  snacks: z.string().optional(),
  dinner: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const AddMess = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Placeholder submission – in production, connect to Supabase backend
    toast({ title: "Submitted", description: "Your mess was submitted for review." });
    reset();
  };

  return (
    <div>
      <Helmet>
        <title>Add Your Mess — The Daily Plate</title>
        <meta name="description" content="Submit your mess details to appear on The Daily Plate: name, address, phone, map link, and menus." />
        <link rel="canonical" href="/add-mess" />
      </Helmet>
      <Navbar />
      <main className="container py-10">
        <h1 className="text-3xl font-semibold mb-4">Add Mess</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 max-w-2xl">
          <Input placeholder="Mess Name" {...register("name")} aria-invalid={!!errors.name} />
          <Input placeholder="Location / Address" {...register("location")} />
          <Input placeholder="Phone" {...register("phone")} />
          <Input placeholder="Google Maps Link" {...register("mapsUrl")} />
          <Input placeholder="Cover Image URL (optional)" {...register("imageUrl")} />
          <Textarea placeholder="Breakfast menu (comma separated)" {...register("breakfast")} />
          <Textarea placeholder="Lunch menu (comma separated)" {...register("lunch")} />
          <Textarea placeholder="Evening Snacks menu (comma separated)" {...register("snacks")} />
          <Textarea placeholder="Dinner menu (comma separated)" {...register("dinner")} />
          <div className="flex gap-3">
            <Button type="submit" disabled={isSubmitting}>Submit</Button>
            <Button type="button" variant="secondary" onClick={() => reset()}>Reset</Button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AddMess;
