import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import perguntasData from '@/data/perguntas.json'

  export function AccordionPerguntas() {
    return (
      <Accordion type="single" collapsible className="w-full min-[600px]:grid min-[600px]:grid-cols-2">
        {perguntasData.map((perguntaD)=>{
            return(

        <AccordionItem key={perguntaD.id} value={perguntaD.id}>
          <AccordionTrigger>{perguntaD.pergunta}</AccordionTrigger>
          <AccordionContent>
            {perguntaD.resposta}
          </AccordionContent>
        </AccordionItem>
            )
        })}
      </Accordion>
    )
  }
  