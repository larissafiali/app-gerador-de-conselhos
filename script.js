const AdviceUpdateButton = document.querySelector('.advice-update');
const adviceNumber = document.querySelector('.advice-dice');
const adviceDescription = document.querySelector('.advice-text');

    async function getAdvice(){

        try{ 
            const response = await fetch ("https://api.adviceslip.com/advice");
            

            if (!response.ok) {
                throw new Error ("Ocorreu um erro");
            }

            const adviceContent = await response.json();
            const adviceId = `Advice #${adviceContent.slip.id}`;
            const adviceText = `"${adviceContent.slip.advice}"`;

            adviceNumber.innerText = adviceId;
            adviceDescription.innerText = adviceText;
        } catch(err){
            console.error("Erro ao tentar buscar as informações da API");
        }
    }

    AdviceUpdateButton.addEventListener('click', getAdvice);


    getAdvice();

