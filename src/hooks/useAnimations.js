export const useAnimations = () => {
       const transition = {
              duration:2,
              ease: [0.6, -0.05, 0.01, 0.9],
       };

       const textReveal = {
              bananin: {
                     y: "200%",
                     opacity:0,
              },
              bananon: {
                     y: "0%",
                     opacity:1,
              },
       }


       return {transition, textReveal};
}