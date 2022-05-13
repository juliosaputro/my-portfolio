import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`

:root{
       --black: #0f0e0e;
       --burlywood:#f6c9a0;
       --grey:#866c55;
       font-family: Anton;
       cursor:none;
}

*{
       margin:0;
       padding:0;
       box-sizing: border-box;
}

h1,h2,h3,h4,h5,a,p{
       color:var(--black);

}

a{
       mix-blend-mode:difference;
       text-transform: uppercase;
       outline: none;
       text-decoration:none;
       font-weight: 800;

}

li{
       list-style:none;
}

html{
       overflow:hidden;
}

body{
       background-color: var(--burlywood);
}

`;