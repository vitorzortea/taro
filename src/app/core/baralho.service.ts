import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaralhoService {

  public baralho = [
    {
      numero: 0,
      titulo: 'O Louco',
      passado: 'uma situação caóticas ou inesperadas que se passou. Algo que pode ter causado uma desestabilização.',
      presente: 'uma situação caóticas ou inesperadas que está acontecendo. Algo ou alguém pode estar causado uma desestabilização.',
      futuro: 'uma situação caóticas ou inesperadas que vai acontecer. Algo ou alguém pode causar uma desestabilização no seu espírito.',
    },
    {
      numero: 1,
      titulo: 'O Mago',
      passado: 'alguém que dominou uma habilidade ou até um domínio sobre outra pessoa, pode ser através do emocional ou até mesmo por uma chantagem.',
      presente: 'que alguém está dominando uma habilidade ou até um domínio sobre outra pessoa, pode ser através do emocional ou até mesmo por uma chantagem.',
      futuro: 'que você ou alguém vai dominar uma habilidade ou até dominar outra pessoa, pode ser através do emocional ou até mesmo por uma chantagem.',
    },
    {
      numero: 2,
      titulo: 'A Papisa ',
      passado: 'um segredo que não foi revelado, pode ser até algo ligado a vidas passadas.',
      presente: 'um segredo que não foi revelado, pode ser até algo ligado a vidas passadas.',
      futuro: 'um segredo será revelado, geralmente algo ligado ao espiritual ou até mesmo algo que pode ser ligado a vidas passadas.',
    },
    {
      numero: 3,
      titulo: 'A Imperatriz',
      passado: 'um passado extremamente frutífero. Uma situação que pode ter gerada vários resultados para o seu presente.',
      presente: 'que você está passando por um momento  extremamente frutífero. Uma situação que pode gerar vários resultados para o seu futuro.',
      futuro: 'que você passará por um momento  extremamente frutífero. Uma situação que pode gerar vários resultados para você ou pessoas em sua volta.',
    },
    {
      numero: 4,
      titulo: 'O Imperador',
      passado: 'alguém no seu passado que te obrigou a fazer algo ou uma escolha. Essa pode exercer um poder natural sobre você.',
      presente: 'alguém que está te obrigando a fazer algo ou uma escolha. Essa pessoa pode exercer um poder natural sobre você.',
      futuro: 'alguém te obrigará a fazer algo ou uma escolha. Essa pessoa pode exercer um poder natural sobre você e talvez tendenciar suas decisões.',
    },
    {
      numero: 5,
      titulo: 'O Papa',
      passado: 'algum momento no passado você teve que passar por um dilema moral. Alguma escolha que pode ter te abalado e repensado no seu próprio caráter.',
      presente: 'que você está passando por um dilema moral. Alguma escolha que pode abalar e te fazer repensar no seu próprio caráter.',
      futuro: 'que você passará por um dilema moral. Alguma escolha que pode abalar e te fazer repensar no seu próprio caráter.',
    },
    {
      numero: 6,
      titulo: 'Os Enamorados',
      passado: 'Dúvida. Você passou teve dúvida em algo muito importante para você. Mesmo que tenha tomado uma decisão, essa dúvida ainda pode estar presente em sua cabeça.',
      presente: 'Dúvida. Você está em dúvida sobre algo muito importante para você. Essa dúvida está presente em sua cabeça e não deixa fluir os seus dias.',
      futuro: 'Dúvida. Você duvidará sobre algo muito importante para você. Essa dúvida ficará presente em sua cabeça e não deixará fluir os seus dias até que se resolva.',
    },
    {
      numero: 7,
      titulo: 'O Carro de guerra',
      passado: 'uma situação difícil para você, mas que você fez de tudo para conseguir sair por cima. Mas lembre se que o “fazer de tudo” pode ter um preço muito caro.',
      presente: 'uma situação difícil para você, mas você está prestes a fazer de tudo para conseguir sair vitorioso. Mas lembre se que o “fazer de tudo” pode ter um preço muito caro.',
      futuro: 'uma situação difícil que chegará para você, mas fará de tudo para conseguir sair vitorioso. Mas lembre se que o “fazer de tudo” pode ter um preço muito caro.',
    },
    {
      numero: 8,
      titulo: 'A Justiça',
      passado: 'um período em seu passado de um grande equilíbrio emocional e um auto controle. Por um lado isso pode ter te ajudado a focar nos momentos difíceis, por outro lado você corre risco de sufocar sua própria voz.',
      presente: 'um equilíbrio emocional e um auto controle. Por um lado isso pode te ajudar a focar nos momentos difíceis, por outro lado você corre risco de sufocar sua própria voz.',
      futuro: 'alcançará um equilíbrio emocional e um auto controle. Por um lado isso pode te ajudar a focar nos momentos difíceis, por outro lado você corre risco de sufocar sua própria voz.',
    },
    {
      numero: 9,
      titulo: 'O Eremita',
      passado: 'um passado onde você se restringiu de um certo convívio social para obter um amadurecimento emocional. tudo pelo auto conhecimento.',
      presente: 'que você pode estar se restringindo de um certo convívio social para obter um amadurecimento emocional. Tudo pelo auto conhecimento.',
      futuro: 'restrição de um certo convívio social para obter um amadurecimento emocional. Tudo pelo auto conhecimento.',
    },
    {
      numero: 10,
      titulo: 'A Roda da Fortuna',
      passado: 'uma situação de troca ou turbulências. pode ser que você tenha mudado algum pensamento fixo e de repente algo como era dito como certo estava errado e algo errado você conseguiu ver que estava certo.',
      presente: 'uma situação de troca ou turbulências. Você está mudado algum pensamento fixo e de repente algo que era dito como certo estava errado e algo errado você conseguiu ver que estava certo.',
      futuro: 'terá uma situação de troca ou turbulências. Você pode mudar algum pensamento fixo e de repente algo que era dito como certo estará errado e algo errado você conseguirá ver que estava certo.',
    },
    {
      numero: 11,
      titulo: 'A Força',
      passado: 'que você passou por uma mudança da forma que você se ver. Talvez uma sensualidade despertada ou até mesmo uma auto confiança inesperada que foi adicionada a sua personalidade.',
      presente: 'que você está passando por uma mudança da forma que você se ver. Talvez uma sensualidade despertada ou até mesmo uma auto confiança inesperada que foi adicionada a sua personalidade.',
      futuro: 'uma mudança da forma que você se ver. Talvez uma sensualidade que será despertada ou até mesmo uma auto confiança inesperada que será adicionada a sua personalidade.',
    },
    {
      numero: 12,
      titulo: 'O Enforcado',
      passado: 'que bocê sofreu alguma consequência de uma decisão do seu passado. essa autopunição que começou há um tempo pode estar persistindo e escurecendo o seu coração. Lembre-se que o perdão é a maior arma e autoperdão também é necessário para vencer.',
      presente: 'que você está sofrendo alguma consequência de uma decisão do seu passado. essa autopunição pode estar persistindo e escurecendo o seu coração. Lembre-se que o perdão é a maior arma e autoperdão também é necessário para vencer.',
      futuro: 'sofrimento por alguma consequência de uma decisão do seu passado. Essa autopunição pode persistir e escurecer o seu coração. Nesse momento, lembre-se que o autoperdão é necessário para vencer qualquer guerra.',
    },
    {
      numero: 13,
      titulo: 'A Morte',
      passado: 'que há pouco tempo você sofreu uma perda rápida. Algo ou alguém que estava com você e em pouco tempo não estava mais. Lembre-se que a vida é um ciclo contínuo, onde é necessário perder algo para ganhar outro. Essa carta é a renovação.',
      presente: 'que você está sofrendo uma perda rápida. Algo ou alguém que estava com você e em pouco tempo não está mais. Lembre-se que a vida é um ciclo contínuo, onde é necessário perder algo para ganhar outro. Essa carta é a renovação',
      futuro: 'que você sofrerá uma perda rápida. Algo ou alguém que está com você em pouco tempo não estará mais. Lembre-se que a vida é um ciclo contínuo, onde é necessário perder algo para ganhar outro. Essa carta é a renovação.',
    },
    {
      numero: 14,
      titulo: 'A Temperança',
      passado: 'que você passou por um momento de movimento onde exigiu uma paciência. Você deve saber que o tempo é o maior fator para neutralizar tudo, mas para esperar o tempo devemos ter paciência e não deixar a ansiedade e angústia tomar nossos corações.',
      presente: 'que você está passando por um momento de movimento onde exigi uma paciência. Você deve saber que o tempo é o maior fator para neutralizar tudo, mas para esperar o tempo devemos ter paciência e não deixar a ansiedade e angústia tomar nossos corações.',
      futuro: 'um momento de movimento onde exigi uma paciência. Você deverá entender que o tempo é o maior fator para neutralizar tudo, mas para esperar o tempo fazer efeito devemos ter paciência e não deixar a ansiedade e angústia tomar nossos corações.',
    },
    {
      numero: 15,
      titulo: 'O Diabo',
      passado: 'que há pouco tempo atrás você passou por uma situação na qual perdeu o seu controle por um impulso animal. Pode ter sido desde uma paixão ou até mesmo algo pelo puro desejo.',
      presente: 'que você está em uma situação na qual está perdendo o seu controle por um impulso animal. Pode ter sido desde uma paixão ou até mesmo algo pelo puro desejo.',
      futuro: 'uma situação na qual você perderá o seu controle por um impulso animal. Pode ser desde uma paixão ou até mesmo algo pelo puro desejo.',
    },
    {
      numero: 16,
      titulo: 'A Torre',
      passado: 'uma desilusão passada. Algo ou alguém que você confiava se revelou não merecedor de tal confiança. Esses momentos podemos ficar cego, mas é seu dever lembrar que o erro começou em você depositando uma confiança onde não deveria.',
      presente: 'uma desilusão. Algo ou alguém que você confia está se revelou não merecedor de tal confiança. Esses momentos pode nos deixar cegos, mas é seu dever lembrar que o erro começou em você depositando uma confiança onde não deveria.',
      futuro: 'uma desilusão. Algo ou alguém que você confia se revelará não merecedor de tal confiança. Esses momentos pode nos deixar cegos, mas será o seu dever lembrar que o erro começa em você depositando uma confiança onde não deveria.',
    },
    {
      numero: 17,
      titulo: 'A Estrela',
      passado: 'simplicidade. Você passou por um momento de rever o que de fato é importante para sua vida, deixando a mais simples tirando tudo aquilo que não era importante.',
      presente: 'simplicidade. Você está revendo o que de fato é importante para sua vida, deixando a mais simples tirando tudo aquilo que não é de fato importante.',
      futuro: 'simplicidade. Você verá o que de fato é importante para sua vida, deixando a mais simples tirando tudo aquilo que não é de fato importante.',
    },
    {
      numero: 18,
      titulo: 'A Lua',
      passado: 'que você viveu uma ilusão ou uma fantasia perigosa. Se essa auto enganação começou no passado, não significa que ela já teve um fim. Você deve rever o seu momento com o máximo de racionalidade possível para não entrar em um problema maior ainda.',
      presente: 'uma ilusão ou uma fantasia perigosa. Essa auto enganação pode não ter sido revelada ainda. Você deve rever o seu momento com o máximo de racionalidade possível para não entrar em um problema maior ainda.',
      futuro: 'uma ilusão ou uma fantasia perigosa. Você deverá rever o seu momentos futuros com o máximo de racionalidade possível para não entrar em um problema ainda maior.',
    },
    {
      numero: 19,
      titulo: 'O Sol',
      passado: 'que você passou um momento muito bom capaz de despertar um entusiasmo e uma energia que te remete a felicida. A luz que te tocou naquele momento ainda pode ser vista pelas pessoas que estão em sua volta.',
      presente: 'que você está em um momento muito bom e capaz de despertar um entusiasmo e uma energia que te remete a felicida. A luz que está te tocando nesse momento pode ser visto pelas pessoas que estão em sua volta.',
      futuro: 'um momento muito bom e capaz de despertar um entusiasmo e uma energia que te remete a felicida. Esse momento de luz vai te tocar e poderá ser visto pelas pessoas que estarão em sua volta.',
    },
    {
      numero: 20,
      titulo: 'O Julgamento',
      passado: 'que uma novidade surgiu para você gerando uma revelação importante no seu ponto de vista de mundo.',
      presente: 'uma novidade está se revelando para você e isso gerará uma reviravolta importante no seu ponto de vista de mundo.',
      futuro: 'uma novidade se revelará para você e isso gerará uma reviravolta importante no seu ponto de vista de mundo.',
    },
    {
      numero: 21,
      titulo: 'O Mundo',
      passado: 'que há pouco tempo atrás você concluiu algo que era muito importante. esse algo pode ser desde um projeto profissional quanto a um relacionamento amoroso.',
      presente: 'que você está concluindo algo que é muito importante para você. Esse algo pode ser desde um projeto profissional quanto a um relacionamento amoroso.',
      futuro: 'conclusão. Você concluirá algo que é muito importante para você. Pode ser desde um projeto profissional quanto a um relacionamento amoroso.',
    },
  ];
  public emaralhado = [];
  public carta1;
  public carta2;
  public carta3;

  constructor() { }

  embaralhar(){
    this.emaralhado = this.baralho.sort(this.randOrd);
    this.emaralhado = this.emaralhado.sort(this.randOrd);
    this.emaralhado = this.emaralhado.sort(this.randOrd);
    this.emaralhado = this.emaralhado.sort(this.randOrd);
    this.emaralhado = this.emaralhado.sort(this.randOrd);
    this.emaralhado = this.emaralhado.sort(this.randOrd);
    this.emaralhado = this.emaralhado.sort(this.randOrd);

    this.carta1 = this.emaralhado[7];
    this.carta2 = this.emaralhado[14];
    this.carta3 = this.emaralhado[21];
  }

  randOrd(){
    return (Math.round(Math.random()) - 0.5);
  }
}
