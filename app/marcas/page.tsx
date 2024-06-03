import { Container } from "@/components/Container"
import { CardMarcas1 } from "@/components/cards/CardMarcas1"
import DataMarcas from '@/data/marcas.json'
export default function MarcasPage (){
    return(<main>

<section className=" bg-white">
        <Container>
          <div className="text-start">
            <div className="text-center py-5">
                    <span className="text-[16px]  sm:text-[1.45rem] block uppercase text-[#42464d] font-bold font-poppins ">
                        Confira todas as nossas marcas      
                    </span>
            </div>
            <div className="grid grid-cols-2  min-[600px]:grid-cols-4 gap-[0.5rem]">
              {DataMarcas.map((marca)=>{
                return(
                  <CardMarcas1 produtos={marca.produtos} href={marca.link} url={marca.url} title={marca.marca} key={marca.id}/>
                )
              })}
            </div>
          </div>
        </Container>
      </section>
    </main>
    )
}