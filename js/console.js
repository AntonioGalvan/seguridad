const niktoConsole = document.getElementById("nikto");
const sqlmapConsole = document.getElementById("sqlmap");
const nmapConsole = document.getElementById("nmap");
const ettercapConsole = document.getElementById("ettercap");
const ettercapConsoleContainer = document.querySelector(".ettercap__console");
const ettercapImg = document.querySelector(".ettercap__img");
let textNikto = 'nikto -h http://www.paginaPrueba.com';
let textSqlmap = 'sqlmap -u http://www.paginaPrueba.com';
let textNmap = 'nmap 10.0.0.14';
let textEttercap = 'ettercap -G';
const fragmentbr = document.createDocumentFragment();
let br;
let i_n = 0;
let i_s = 0;
let i_m = 0;
let i_e = 0;

let niktoState = false;
let sqlmapState = false;
let nmapState = false;
let ettercapState = false;

window.addEventListener("scroll",()=>
{
  let clientHeight = document.documentElement.clientHeight;
  
  let niktoY = niktoConsole.getBoundingClientRect().y;
  let niktoheight = niktoConsole.getBoundingClientRect().height;

  let sqlmapY = sqlmapConsole.getBoundingClientRect().y;
  let sqlmapheight = sqlmapConsole.getBoundingClientRect().height;

  let nmapY = nmapConsole.getBoundingClientRect().y;
  let nmapheight = nmapConsole.getBoundingClientRect().height;

  let ettercapY = ettercapConsole.getBoundingClientRect().y;
  let ettercapheight = ettercapConsole.getBoundingClientRect().height

  if((clientHeight > niktoY + niktoheight * 2/3) && niktoState == false)
  {
    setTimeout(() =>
    {
      i_n = 0;
      nikto();
      
    }, 500)

    niktoState = true;
    
  }

  if((clientHeight > sqlmapY + sqlmapheight * 2/3) && sqlmapState == false)
  {
    setTimeout(() =>
    {
      i_s = 0;
      sqlmap();
      
    }, 500)

    sqlmapState = true;
    
  }

  if((clientHeight > nmapY + nmapheight * 2/3) && nmapState == false)
  {
    setTimeout(() =>
    {
      i_s = 0;
      nmap();
      
    }, 500)

    nmapState = true;
    
  }

  if((clientHeight > ettercapY + ettercapheight * 2/3) && ettercapState == false)
  {
    setTimeout(() =>
    {
      i_e = 0;
      ettercap();
      
    }, 500)

    ettercapState = true;
    
  }
  
})

const nikto = () => {

  niktoConsole.append(textNikto.charAt(i_n));
    i_n++;

  setTimeout(() => {
      if (i_n < textNikto.length)
      {
        nikto();
      }
      else 
      {

        i_n = 0;
        niktoConsole.classList.toggle("hidden");
        
        niktoConsole.append(insertBr());
        niktoConsole.append("- Nikto v2.1.3");
        niktoConsole.append(insertBr());
        niktoConsole.append("⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯");
        niktoConsole.append(insertBr());
        niktoConsole.append("+ Target IP:            10.0.0.14");
        niktoConsole.append(insertBr());
        niktoConsole.append("+ Target Hostname:      ms2");
        niktoConsole.append(insertBr());
        niktoConsole.append("+ Target Port:          80");
        niktoConsole.append(insertBr());
        niktoConsole.append("+ Start Time:           2020-11-03 11:19:32 (GMT-5)");
        niktoConsole.append(insertBr());
        niktoConsole.append("⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯");

        setTimeout(() => {
            niktoConsole.append(insertBr());
            niktoConsole.append("+ Server: Apache/2.2.8 (Ubuntu) DAV/2");
            niktoConsole.append(insertBr());
            niktoConsole.append("+ Retrieved x-powered-by header: PHP/5.2.4-2Ubuntu5-10");
            niktoConsole.append(insertBr());
            niktoConsole.append("+ Server: Apache/2.2.8 (Ubuntu) DAV/2");
            niktoConsole.append(insertBr());
            niktoConsole.append("+ Allowed HTTP Methods: GET, HEAD, POST, OPTIONS");
            niktoConsole.append(insertBr());

            niktoConsole.classList.toggle("hidden");
            let p = document.createElement("p");
            p.classList.add("nta-text","nta-text-xs", "code-pro-bold", "cs-red");
            p.textContent = "kali@kali: ~$ ";
            fragmentbr.appendChild(p);
            niktoConsole.append(fragmentbr);

            document.getElementById("console-display1").scrollTo(0, document.getElementById("console-display1").scrollHeight);
        },1000);
        
      }
    }, Math.floor(Math.random() * 100) + 50);
    
}

const sqlmap = () => {

  sqlmapConsole.append(textSqlmap.charAt(i_s));
    i_s++;

    setTimeout(() => {
      if (i_s < textSqlmap.length)
      {
        sqlmap();
      }
      else 
      {
        i_s = 0;
        sqlmapConsole.classList.toggle("hidden");

        sqlmapConsole.append(insertBr());

        const fragmentpre = document.createDocumentFragment();
        let pre = document.createElement("pre");
        pre.textContent = "       ___\n       __H__\n ___ ___[']_____ ___ ___ \n|_ -| . [']     | .'| . |\n|___|_  [']_|_|_|__,|  _|\n      |_|V...       |_|";
        fragmentpre.appendChild(pre);
        sqlmapConsole.append(fragmentpre);

        sqlmapConsole.append(insertBr());
        sqlmapConsole.append("{1.5.2.12#dev}");
        sqlmapConsole.append(insertBr());
        sqlmapConsole.append("http://sqlmap.org");
        

        sqlmapConsole.append(insertBr());
        sqlmapConsole.append("[!] legal disclaimer: Usage of sqlmap for attacking targets without prior mutual consent is illegal. It is the end user's responsibility to obey all applicable local, state and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program");


        setTimeout(() => {
            document.getElementById("console-display2").scrollTo(0, document.getElementById("console-display2").scrollHeight);
            sqlmapConsole.append(insertBr());
            sqlmapConsole.append(insertBr());

            setTimeout(() => {
              sqlmapConsole.append("[12:55:56] [INFO] testing connection to the target URL");

              document.getElementById("console-display2").scrollTo(0, document.getElementById("console-display2").scrollHeight);
            
              setTimeout(() => {
                sqlmapConsole.append(insertBr());
                sqlmapConsole.append("[12:55:57] [INFO] checking if the target is protected by some kind of WAF/IPS/IDS");

                document.getElementById("console-display2").scrollTo(0, document.getElementById("console-display2").scrollHeight);

                setTimeout(() => {
                  sqlmapConsole.append(insertBr());
                  sqlmapConsole.append("[12:55:58] [INFO] testing if the target URL content is stable");

                  document.getElementById("console-display2").scrollTo(0, document.getElementById("console-display2").scrollHeight);

                  setTimeout(() => {
                    sqlmapConsole.append(insertBr());
                    sqlmapConsole.append("[12:55:58] [INFO] target URL content is stable");
                    sqlmapConsole.append(insertBr());

                    document.getElementById("console-display2").scrollTo(0, document.getElementById("console-display2").scrollHeight);
            

                    sqlmapConsole.classList.toggle("hidden");
                    let p = document.createElement("p");
                    p.classList.add("nta-text","nta-text-xs", "code-pro-bold", "cs-red");
                    p.textContent = "kali@kali: ~$ ";
                    fragmentbr.appendChild(p);
                    sqlmapConsole.append(fragmentbr);

                    document.getElementById("console-display2").scrollTo(0, document.getElementById("console-display2").scrollHeight);
                  },400);
                },400);
              },400);
            },400);

        },1000);
      }
    }, Math.floor(Math.random() * 100) + 50);
}

const nmap = () => {
  nmapConsole.append(textNmap.charAt(i_m));
  i_m++;

  setTimeout(() => {
    if (i_m < textNmap.length)
    {
      nmap();
    }
    else
    {
      i_m = 0;
      nmapConsole.classList.toggle("hidden");

      nmapConsole.append(insertBr());
      nmapConsole.append("Starting Nmap 7.80 ( https://nmap.org ) at 2022-04-01 08:24 EDT");

      setTimeout(() => {
        nmapConsole.append(insertBr());
        nmapConsole.append("Nmap scan report for 10.0.0.14");
        nmapConsole.append(insertBr());
        nmapConsole.append("Host is up (0.0022s latency).");
        nmapConsole.append(insertBr());
        nmapConsole.append("Not shown: 977 closed ports");
        nmapConsole.append(insertBr());
        nmapConsole.append("PORT      STATE SERVICE");
        nmapConsole.append(insertBr());
        nmapConsole.append("21/tcp    open  ftp");
        nmapConsole.append(insertBr());
        nmapConsole.append("22/tcp    open  ssh");
        nmapConsole.append(insertBr());
        nmapConsole.append("23/tcp    open  telnet");
        nmapConsole.append(insertBr());
        nmapConsole.append("25/tcp    open  smtp");
        nmapConsole.append(insertBr());
        nmapConsole.append("53/tcp    open  domain");
        nmapConsole.append(insertBr());
        nmapConsole.append("80/tcp    open  http");
        nmapConsole.append(insertBr());
        nmapConsole.append("111/tcp   open  rpcbind");
        nmapConsole.append(insertBr());
        
        nmapConsole.classList.toggle("hidden");
        let p = document.createElement("p");
        p.classList.add("nta-text","nta-text-xs", "code-pro-bold", "cs-red");
        p.textContent = "kali@kali: ~$ ";
        fragmentbr.appendChild(p);
        nmapConsole.append(fragmentbr);
        document.getElementById("console-display3").scrollTo(0, document.getElementById("console-display3").scrollHeight);
      },1000);
    }
  }, Math.floor(Math.random() * 100) + 50);

}

const ettercap = () => {
  ettercapConsole.append(textEttercap.charAt(i_e));
    i_e++;

  setTimeout(() => {
      if (i_e < textEttercap.length)
      {
        ettercap();
      }
      else 
      {

        i_e = 0;
        ettercapConsole.classList.toggle("hidden");
        
        ettercapConsole.append(insertBr());
        ettercapConsole.append("ettercap 0.8.3 copyright 2001-2019 Ettercap Development Team");

        setTimeout(() => {
          ettercapConsoleContainer.classList.toggle("invisible");
          ettercapImg.classList.toggle("invisible");
        }, 1000);
      }
    }, Math.floor(Math.random() * 100) + 50);

    
}

const insertBr = () => 
{ 
    br = document.createElement("br");
    fragmentbr.appendChild(br);
    return fragmentbr;
}

