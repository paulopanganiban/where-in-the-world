// import original module declaration
import 'styled-components';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    background: string;    
  }
}