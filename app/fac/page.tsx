import { AccordionPerguntas } from "@/components/AccordionPerguntas";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";

export default function Page() {
    return (
        <section className="bg-primary">
        <Container className="bg-white py-5 rounded-[15px]">
        <h2 className="text-center font-semibold font-manav mb-[30px] text-[26px]">
          Perguntas frequentes
        </h2>
        <AccordionPerguntas/>
  
        </Container>
      </section>
    )
}