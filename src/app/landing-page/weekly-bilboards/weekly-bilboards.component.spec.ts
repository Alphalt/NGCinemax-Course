import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBilboardsComponent } from './weekly-bilboards.component';
import { LandingPageService } from '../../services/landing-page.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Movies } from '../../models/movies.model';
import { of } from 'rxjs';

fdescribe('WeeklyBilboardsComponent', () => {
  let component: WeeklyBilboardsComponent;
  let fixture: ComponentFixture<WeeklyBilboardsComponent>;
  let servicio: LandingPageService;
  let mockResponsePeliculas: Movies[] = [
    {
      "cartelera": true,
      "descripcion": "Superman (Henry Cavill) se ha convertido en la figura más controvertida del mundo. Mientras que muchos siguen creyendo que es un emblema de esperanza, otro gran número de personas lo consideran una amenaza para la humanidad. Para el influyente Bruce Wayne (Ben Affleck), Superman es claramente un peligro para la sociedad, su poder resulta imprudente y alejado de la mano del gobierno. Por eso, ante el temor de las acciones que pueda llevar a cabo un superhéroe con unos poderes casi divinos, decide ponerse la máscara y la capa para poner a raya al superhéroe de Metrópolis. Mientras que la opinión pública debate sobre el interrogante de cuál es realmente el héroe que necesitan, el Hombre de Acero y Batman, enfrentados entre sí, se sumergen en una contienda el uno contra el otro. La rivalidad entre ellos está alimentada por el rencor y la venganza, y nada puede disuadirlos de librar esta guerra. Hostigados por el multimillonario Lex Luthor (Jesse Eisenberg), Batman y Superman se ven las caras en una lucha sin precedentes. Pero las cosas se complican cuando una nueva y peligrosa amenaza pronto cobra fuerza, poniendo a toda la humanidad en el mayor peligro que nunca se haya conocido antes. Esta nueva y oscura amenaza, que surge con la figura de un tercer hombre con poderes superlativos llamado Doomsday, puede poner en serio peligro al mundo y causar la destrucción total. Será entonces cuando el Último Hijo de Krypton y el Caballero Oscuro unan sus fuerzas con Wonder Woman (Gal Gadot) para enfrentarse todos juntos a esta amenazante nueva máquina de matar.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-fbf6e.appspot.com/o/BatmanVSSuperman.jpg?alt=media&token=5f7ba1de-f6e0-4e29-81a0-3f5f4d675ecb",
      "likes": 54,
      "nombre": "Batman vs Superman",
      "trailer": "https://www.youtube.com/watch?v=0WWzgGyAH6Y"
      },
      {
      "cartelera": true,
      "descripcion": "En un futuro no muy lejano, legiones de gigantescas criaturas monstruosas comienzan a salir misteriosamente de las profundidades del mar con el objetivo de iniciar una guerra contra la humanidad que puede destruir millones de vidas y agotar todos los recursos que el ser humano necesita para sobrevivir. Estas terribles criaturas, hasta entonces desconocidas por la raza humana, son denominadas Kaiju, nombre que hace referencia a las películas sobre grandes y espeluznantes criaturas propias del género cinematográfico japonés que comparte el mismo nombre.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-fbf6e.appspot.com/o/pacific-rim.jpg?alt=media&token=6b55d570-ee18-4dad-80e1-c96858275438",
      "likes": 36,
      "nombre": "Pacific Rim 2013",
      "trailer": "https://www.youtube.com/watch?v=K-ZcqwvQbas"
      },
      {
      "cartelera": true,
      "descripcion": "Arizona, 1873. Un extraño (Craig), que no recuerda su pasado, acaba por casualidad en el duro y desértico pueblo de Absolution. La única pista sobre esta misteriosa historia es un grillete que lleva enganchado en su muñeca. Pronto descubre que los forasteros no son bienvenidos en Absolution y que nadie mueve un dedo en sus calles sin que se lo ordene el Coronel (mano de hierro) Dolarhyde Ford. Es un pueblo que vive sumido en el miedo. Pero Absolution está a punto de experimentar un pánico incompresible cuando la desolada ciudad es atacada por unos maleantes desde el cielo. Haciendo un gran ruido y a una impresionante velocidad, las luces cegadoras abducen a los indefensos uno a uno, desafiando todo lo que los residentes conocían hasta ahora.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-fbf6e.appspot.com/o/cowboys_aliens.jpg?alt=media&token=6dc9742f-86c3-455b-8f7d-ddc49cd445d4",
      "likes": 61,
      "nombre": "Cowboys & Aliens",
      "trailer": "https://www.youtube.com/watch?v=MqCp2PmRyXg"
      },
      {
      "cartelera": true,
      "descripcion": "Una historia alrededor de la población vasca bombardeada por la aviación nazi en abril de 1937, durante la Guerra Civil Española. En ese contexto, la joven Teresa (María Valverde), una editora de la oficina de prensa republicana chocará con Henry (James D’Arcy), un periodista americano en horas bajas que está cubriendo el conflicto. Teresa, cortejada por su jefe, Vasyl (Jack Davenport), asesor soviético del gobierno republicano, se sentirá atraída por el idealismo durmiente de Henry y querrá despertar en él la pasión por contar la verdad, que un día fue su único objetivo.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-fbf6e.appspot.com/o/gernika.jpg?alt=media&token=82b2c8e7-528c-4f64-a93a-ef0ecd014f94",
      "likes": 12,
      "nombre": "Gernika",
      "trailer": "https://www.youtube.com/watch?v=uuKl2dIiUzM"
      },
      {
      "cartelera": true,
      "descripcion": "El temerario aventurero Peter Quill es objeto de un implacable cazarrecompensas después de robar una misteriosa esfera codiciada por Ronan, un poderoso villano cuya ambición amenaza todo el universo. Para poder escapar del incansable Ronan, Quill se ve obligado a pactar una complicada tregua con un cuarteto de disparatados inadaptados: Rocket, un mapache armado con un rifle, Groot, un humanoide con forma de árbol, la letal y enigmática Gamora y el vengativo Drax the Destroyer. Pero cuando Quill descubre el verdadero poder de la esfera, deberá hacer todo lo posible para derrotar a sus extravagantes rivales en un intento desesperado de salvar el destino de la galaxia.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-fbf6e.appspot.com/o/guardians-galaxy.jpg?alt=media&token=e29f6ff4-c4e4-4dd6-857e-acef0ca63e97",
      "likes": 98,
      "nombre": "Guardianes de la Galaxia",
      "trailer": "https://www.youtube.com/watch?v=qdIuXCfUKM8"
      },
      {
      "cartelera": true,
      "descripcion": "Cuando un meteorito lleno de mugre espacial transforma a Susan Murphy en una gigante, el Gobierno le concede el nombre de Ginormica y la encierra en una instalación secreta con otros monstruos, como el Dr. Cucaracha, cabeza de insecto. Cuando un robot extraterrestre llega a la Tierra y empieza una masacre, el general W.R. Monger convence al presidente para que envíe a Ginormica y a los monstruos a enfrentarse a la máquina y salvar al planeta.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-fbf6e.appspot.com/o/mostruos_vs_alienigenas.jpg?alt=media&token=32ce20bd-2430-42ad-82f9-e6bb767f6ad0",
      "likes": 33,
      "nombre": "Monstruos vs Alienígenas",
      "trailer": "https://www.youtube.com/watch?v=UzZRJTeMb0E"
      },
      {
      "cartelera": false,
      "descripcion": "El Imperio Galáctico ha terminado de construir el arma más poderosa de todas, la Estrella de la muerte, pero un grupo de rebeldes decide realizar una misión de muy alto riesgo: robar los planos de dicha estación antes de que entre en operaciones, mientras se enfrentan también al poderoso Lord Sith conocido como Darth Vader, discípulo del despiadado Emperador Palpatine. Film ambientado entre los episodios III y IV de Star Wars.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-fbf6e.appspot.com/o/RogueOneP.jpg?alt=media&token=b37746aa-e60b-47be-b963-7c9758e2d580",
      "likes": 0,
      "nombre": "Rogue One",
      "trailer": "https://www.youtube.com/watch?v=frdj1zb9sMY"
      },
      {
      "cartelera": false,
      "descripcion": "Dos adolescentes pacientes de cáncer inician un viaje para reafirmar sus vidas y visitar a un escritor solitario en Ámsterdam.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-fbf6e.appspot.com/o/stars.jpg?alt=media&token=745649f4-ad65-4934-9a34-abf65d2c93b8",
      "likes": 0,
      "nombre": "Bajo la misma Estrella",
      "trailer": "https://www.youtube.com/watch?v=9Lt8QAZkc94"
      },
      {
      "cartelera": false,
      "descripcion": "Ahmanet, una antigua princesa egipcia maldita, despierta en su cripta y, furiosa y malvada, siembra el terror entre los humanos. La única persona que puede detenerla y evitar que arrase Londres es un intrépido mercenario.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-fbf6e.appspot.com/o/the_mummy.jpg?alt=media&token=ab315f96-8557-455c-b37f-7d7c972f6f6c",
      "likes": 0,
      "nombre": "La Momia",
      "trailer": "https://www.youtube.com/watch?v=b6iqUM7bxk4"
      },
      {
      "cartelera": false,
      "descripcion": "El periodista Eddie Brock está investigando a Carlton Drake, el célebre fundador de Life Foundation. Brock establece una simbiosis con un ente alienígena que le ofrece superpoderes, pero el ser se apodera de su personalidad y le vuelve perverso.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-fbf6e.appspot.com/o/venom.jpg?alt=media&token=95052525-6f42-4c64-970d-d0f731e32d0e",
      "likes": 0,
      "nombre": "Venom",
      "trailer": "https://www.youtube.com/watch?v=mYTmQWZkw10"
      },
      {
      "cartelera": false,
      "descripcion": "Un desertor de la escuela de medicina intenta ocultar su atracción hacia su nueva amiga (Zoe Kazan), una brillante artista que ya tiene novio.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-fbf6e.appspot.com/o/what_if.jpg?alt=media&token=163d79a2-ca7d-4e43-b4a3-e6fe5e0d857f",
      "likes": 0,
      "nombre": "¿Sólo amigos?",
      "trailer": "https://www.youtube.com/watch?v=-CuAGFDpVpU"
      },
      {
      "cartelera": false,
      "descripcion": "Diana, hija de dioses y princesa de las amazonas, nunca ha salido de su isla. Un día, en el contexto de la Primera Guerra Mundial, un piloto americano se estrella en su isla y Diana salva su vida; el piloto le explica que se está desarrollando una gran guerra que puede devastar el mundo, y Diana parte a la batalla.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-fbf6e.appspot.com/o/wonder_woman.jpg?alt=media&token=e76a9287-f9c6-48ae-a856-eb6feec54db7",
      "likes": 0,
      "nombre": "La mujer maravilla",
      "trailer": "https://www.youtube.com/watch?v=DYhqqzo2xOI"
      }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WeeklyBilboardsComponent
      ],
      imports:[
        HttpClientTestingModule
      ],
      providers:[
        LandingPageService
      ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyBilboardsComponent);
    component = fixture.componentInstance;
    servicio = component.landingPageService;
    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe inyectar el LandingPageService', () => {
    expect(servicio).toBeTruthy();
  });

  it('Debe llamar a getMovies() de LandingPageService', ()=>{
    let obtenerPeliculas = spyOn(servicio, 'getMovies').and.returnValue(of(mockResponsePeliculas));
    component.ngOnInit();
    expect(obtenerPeliculas).toHaveBeenCalled();
  });
});
