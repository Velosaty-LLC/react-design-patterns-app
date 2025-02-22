import { layoutexamples, sidebarexample } from "./assets/index.assets"

/**react-design-patterns-app - version 4.11 - data js  
 * - Features: 
 *    
 *     --> Adding 'UncontrolledFlowPattern' code for 
 *         CodeData
 * 
 * Note: This component will have later the main menu
 * to each pattern and its explanations and use cases
 */

export const patternCard = [
    {
      id:1,
      category:'Component Patterns',
      pattern:'Layout Components',
      description:''
    },
    {
      id:2,
      category:'Component Patterns',
      pattern:'Container Components',
      description:''
    },
    {
      id:3,
      category:'Component Patterns',
      pattern:'Controlled and Uncontrolled Components',
      description:''
    },
    {
      id:4,
      category:'Component Patterns',
      pattern:'Higher-Order Components',
      description:''
    },
    {
      id:5,
      category:'Component Patterns',
      pattern:'Custom Hooks Patterns',
      description:''
    },
    {
      id:6,
      category:'Component Patterns',
      pattern:'Functional Programming and React',
      description:''
    },
    {
      id:7,
      category:'Advanced Concepts and Hooks',
      pattern:'React Portals',
      description:''
    },
    {
      id:8,
      category:'Advanced Concepts and Hooks',
      pattern:'Forwarding Refs',
      description:''
    },
    {
      id:9,
      category:'Advanced Concepts and Hooks',
      pattern:'Error Boundaries',
      description:''
    },
    {
      id:10,
      category:'Advanced Concepts and Hooks',
      pattern:'Advanced Hooks',
      description:''
    },
    {
      id:11,
      category:'Design System',
      pattern:'Design System Core Concepts',
      description:''
    },
    {
      id:12,
      category:'Component Patterns',
      pattern:'Building Components Using Figma',
      description:''
    },
    {
      id:13,
      category:'Design System',
      pattern:'React Composition',
      description:''
    },
    {
      id:14,
      category:'Design System',
      pattern:'Developing Components',
      description:''
    },
    {
      id:15,
      category:'Design System',
      pattern:'Encapsulating Styles',
      description:''
    },
    {
      id:16,
      category:'Design System',
      pattern:'Patterns for Spacing',
      description:''
    },
    {
      id:17,
      category:'Design System',
      pattern:'Patterns for more Complex Styles',
      description:''
    },
    {
      id:18,
      category:'Performance',
      pattern:'Optimization',
      description:''
    },
    {
      id:19,
      category:'Performance',
      pattern:'Fixing Rendering issues',
      description:''
    },
    {
      id:20,
      category:'Performance',
      pattern:'Expensive operations',
      description:''
    },
    {
      id:21,
      category:'Practices',
      pattern:'Clean Code Tips',
      description:''
    },
    {
      id:22,
      category:'Advanced TypeScript',
      pattern:'Introduction',
      description:''
    },
    {
      id:23,
      category:'Advanced TypeScript',
      pattern:'Basics',
      description:''
    },
    {
      id:24,
      category:'Advanced TypeScript',
      pattern:'Typing Hooks',
      description:''
    },
    {
      id:25,
      category:'Advanced TypeScript',
      pattern:'Typing reducers',
      description:''
    },
    {
      id:26,
      category:'Advanced TypeScript',
      pattern:'Typing Context',
      description:''
    },
    {
      id:27,
      category:'Advanced TypeScript',
      pattern:'Using Generics',
      description:''
    },
    {
      id:28,
      category:'Advanced TypeScript',
      pattern:'More on TypeScript',
      description:''
    },
    {
      id:29,
      category:'Advanced TypeScript',
      pattern:'Component Patterns',
      description:''
    },
    {
      id:30,
      category:'React Router',
      pattern:'Introduction',
      description:''
    },
    {
      id:31,
      category:'React Router',
      pattern:'Basic Concepts',
      description:''
    },
    {
      id:32,
      category:'React Router',
      pattern:'Navigations and links',
      description:''
    },
    {
      id:33,
      category:'React Router',
      pattern:'Advanced Routing',
      description:''
    },
]


export const IntroComponentData = [
  {
    title: 'Introduction to React Pattterns',
    description:'Design patterns are effective solutions for common challenges and some of this are specific patterns that come from actual industry experience',
    items:[
      {
        id:1,
        challenge:'Design patterns that are specific to React',
      },
      {
        id:2,
        challenge: 'Best practices to magaging form state',
      },
      {
        id:3,
        challenge:'Functional Programming in the context of react'
      }
    ]
  }
]

export const ImagesData = [
  {
    id:1,
    category: 'layout',
    list:[
      {
        id:1,
        image: layoutexamples
      },
      {
        id:1,
        image: sidebarexample
      }
    ]
  }
]

/**this is the code data in order to explain it */
export const CodeData = [
  {
    id: 1,
    name:'layout splitter',
    code: `
<Container>
  <Panel flex={leftWidth} className="bg-red-400">
    <Left />
  </Panel>
  <Panel flex={rightWidth} className="bg-red-500">
    <Right />
  </Panel>
</Container>
    `
  },
  {
    id: 2,
    name:'layout splitter variation',
    code: `
    const SplitScreenVariation = ({ children, leftWidth = 1, rightWidth = 1 }) => {

      const [ left, right ] = children;
      
      return(
      <Container>
              <Panel flex={leftWidth} className="bg-red-400">
                 {left}
              </Panel>
              <Panel flex={rightWidth} className="bg-red-500">
                  {right}
              </Panel>
      </Container>
      )
  }
  
  export default SplitScreenVariation;
    `
  },
  {
    id: 3,
    name:'layout splitter variation composition 1',
    code: `
    <SplitScreenVariation leftWidth={1} rightWidth={3}>
      <LeftSideComponent />
      <RightSideComponent/>
    </SplitScreenVariation>
    `
  },
  {
    id: 4,
    name:'layout splitter variation composition 2',
    code: `
    <SplitScreenVariation leftWidth={1} rightWidth={3}>
      <LeftSideComponentVariation  title={'the left custom content'}/>
      <RightSideComponentVariation title={'the right custom content'} />
    </SplitScreenVariation>
    `
  },
  {
    id: 5,
    name:'layout list - small size',
    code: `
    const AuthorSmallListItems = ({ author }) => {
      
      /**the 'author' is the source name, and it will be a sorce prop
       * for the 'list layout component'*/
    
      const { name, age } = author;
    
      return(
          <>
              <p><span></span> <span className="author-name"><span>{name}</span></span></p>
              <p><span>Age:</span> { age }</p>
          </>
      )
    }
    
    export default AuthorSmallListItems;
    `
  },
  {
    id: 6,
    name:'layout list - large size',
    code: `
    const AuthorLargeListItems = ({ author }) => {
      
      /**the 'author' is the source name, and it will be a sorce prop
       * for the 'list layout component'*/

      const { name, age, country, books } = author;
  
      return(
          <>
              <h2><span className="author-name"><span>{name}</span></span></h2>
              <p><span>Age:</span> {age}</p>
              <p><span>Country:</span> {country}</p>
              <h2><span>Books:</span></h2>
              <ul>
              {books.map((book) => {
  
                  return(
                      <li key={book}>{book}</li>
                  )
              })}
              </ul>
          </>
      )
  }
  
  export default AuthorLargeListItems;
    `
  },
  {
    id: 7,
    name:'layout list - main component',
    code: `
    const RegularList = ({ items, sourceName, ItemComponent }) => {

      /**
       *     items---------------> these are the items that 
       *                          are going to be display in 
       *                          the list ( the data )
       * 
       *      sourceName----------> is the prop name where the
       *                            data is destructured in the 
       *                            source component ( the name 
       *                             of the data to be destructured)
       * 
       *      ItemComponent-------> it is the source component or 
       *                            the source component
           */
          return(
              <ListWrapper>
                                /**the spread operator will bring all the source props as they are*/
                  {items.map((item, index) => <ItemComponent key={index} { ...{[sourceName]: item}}/> )}
              </ListWrapper>
          )
      
      }
      
      export default RegularList;
    `
  },
  {
    id: 8,
    name:'layout modal - modal code',
    code: `
    /** the children prop is passed here*/
    const Modal = ({ children }) => {
        const [show, setShow] = useState(false);
    
        /**this 3 handlers are the functionality of the modal*/
        const openModal = () => setShow(true);
        const closeModal = () => setShow(false);

        /**prevent events from any parent element keeping functionality*/
        const stopPropagation = (e) => e.stopPropagation();
    
        return (
            <>
                <button onClick={openModal}>
                    Show modal 
                    <OpenModalWrapper>
                        <img src={openmodal} alt="openmodal"/>
                    </OpenModalWrapper>
                </button>
                {show && (
                    <ModalBackground onClick={closeModal}>
                        <ModalContent onClick={stopPropagation}>
                            <button onClick={closeModal}>
                            <img src={close} alt="close"/>
                            </button>
                            /**and children will be the content of the modal*/
                            {children}
                        </ModalContent>
                    </ModalBackground>
                )}
            </>
        );
    };
    
    export default Modal;
    `
  },
  {
    id: 9,
    name: 'layout modal - ModalBackground code',
    code: `
    export const ModalBackground = styled.div\`
    \${tw('fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center')}
    \`;
    `
  },
  {
    id: 10,
    name: 'layout modal - ModalContent code',
    code: `
    /**this will be the children of the modal component, for this case a samll list*/
    export const ModalContent = styled.div\`
    \${tw'p-6 bg-white w-1/2 text-black '}
    \`;
    `
  },
  {
    id: 11,
    name: 'Container Patterns - CurrentUser',
    code: `
    const CurrentUser = ({ children }) => {
    
      const [ user, setUser ] = useState(null)
  
      /**is handling on mount the data mutation */
      useEffect(() => {
          (async () => {
              const response = await axios.get("/current-user");
              setUser(response.data)
          })();
      }, [])
  
      return(
          <>
          {/**React.Children.map() to iterate over each child passed to the component.
           * once verified is valid react elemnent provide the 'user' data source
           */}
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { user });
            }
            return child;
          })}
        </>
      )
  }
  
  export default CurrentUser;
    `
  },
  {
    id: 12,
    name: 'Container Patterns - UserInfo',
    code: `
    const UserInfo = ({ user }) => {

      /**can be destructure as this on user or by implementing spread 
       * operator in case is need it to use more props */  
      const { name, age, country, books } = user || {};
    
      /**here i verify the user in order to set the data */
      return user ? (
        <ListWrapper>
          <h2 className="author-name"><span>{name}</span></h2>
          <p><span>Age: </span> {age} years</p>
          <p><span>Country: </span> {country}</p>
          <h2><span>Books: </span></h2>
          <ul>
            {books.map((book) => (
              <li key={book}> {book} </li>
            ))}
          </ul>
        </ListWrapper>
      ) : (
        <h1>Loading...</h1>
      );
    }
    
    export default UserInfo;
    `
  },
  {
    id: 13,
    name: 'Container Pattern - single current user',
    code: `
      /**the container component */  
      <CurrentUser>
      /**the end component */
          <UserInfo />
      </CurrentUser>
    `
  },
  {
    id: 14,
    name: 'Container Pattern - ContainerLoader',
    code: `  
      /*by passing the id i target the user data**/
      const ContainerLoader = ({ userId, children }) => {
    
        const [ user, setUser ] = useState(null)
    
        useEffect(() => {
            (async () => {
                const response = await axios.get(\`users/\${userId}\`);
                setUser(response.data)
            })();
        }, [userId])
    
        return(
            <>
            {/**this logic stays the same as CurrentUser*/}
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, { user });
              }
              return child;
            })}
          </>
        )
    }
    
    export default ContainerLoader;
    `
  },
  {
    id: 15,
    name: 'Container Pattern - ContainerLoader Wrap',
    code: `  
      /*the container will receive the target**/
      <ContainerLoader userId={'3'}>
         <UserInfo/>
      </ContainerLoader>
    `
  },
  {
    id: 17,
    name: 'Container Pattern - ContainerGeneric',
    code: `  
      /*the container will target the complete url, resourname and keeping 
      * the children logic**/

      const ContainerGeneric = ({ resourceUrl, resourceName, children }) => {
    
        const [ resource, setResource ] = useState(null)
    
        /*here the data is mutated to the url**/
        useEffect(() => {
            (async () => {
                const response = await axios.get(resourceUrl);
                setResource(response.data)
            })();
            /*and will be mount depending on the url (so can be custom and dynamic )**/
        }, [resourceUrl])
    
        return(
            <>
            {/**React.Children.map() to iterate over each child passed to the component.
             * once verified is valid react elemnent provide the 'user' data source
             */}
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, { [resourceName]: resource });
              }
              return child;
            })}
          </>
        )
    }
    
    export default ContainerGeneric;
    `
  },
  {
    id: 18,
    name: 'Container Pattern - ContainerGeneric Wrap',
    code: `  
    /**the component handle a full path and a data set name */ 
      <ContainerGeneric resourceUrl={'/users/1'} resourceName={'user'}>
            /*the end component**/
           <UserInfo />
      </ContainerGeneric>
    `
  },
  {
    id: 19,
    name: 'Container Pattern - Consuming components',
    code: `  
    /**the same component now is consuming books*/ 
    <ContainerGeneric resourceUrl={'/books/1'} resourceName={'book'}>
        /**the end component*/
        <BookInfo/>
    </ContainerGeneric>
    `
  },
  {
    id: 20,
    name: 'Container Pattern - ContainerDataSource',
    code: `  
    /**the 'getData = () => {}' is empty by default to be filled through the container*/ 
    const ContainerDataSource = ({ getData = () => {}, resourceName, children }) => {
    
      const [ resource, setResource ] = useState(null)
  
      /**the data mutation will be done after the invocation*/  
      useEffect(() => {
          (async () => {
              const data = await getData()
              setResource(data)
          })();
      /**the dependency will be the data call*/
      }, [getData])
  
      return(
          <>
          {/**and this pattern will persist */}
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { [resourceName]: resource });
            }
            return child;
          })}
        </>
      )
  }
  
  export default ContainerDataSource;
    `
  },
  {
    id: 20,
    name: 'Container Pattern - ContainerDataSource wrap',
    code: `  
    /**the 'getData' get filled with the 'getDataFromServer' logic*/ 
    <ContainerDataSource getData={ () => getDataFromServer('/books/3')}
            resourceName={'book'}
            >
                <BookInfo />
    </ContainerDataSource>
    `
  },
  {
    id: 21,
    name: 'Container Pattern - ContainerRender',
    code: `  
    /**the 'getData' get filled with the 'getDataFromServer' logic and
     * the render method will pass the component to be rendered */ 
    const ContainerRender = ({ getData = () => {}, render }) => {
    
      const [ resource, setResource ] = useState(null)
      
      /**here i mutate the data*/
      useEffect(() => {
          (async () => {
              const data = await getData()
              setResource(data)
          })();
      }, [getData])
  
      /**instead of cloning i just return the render resource*/
      return render(resource);
  }
  
  export default ContainerRender;
    `
  },
  {
    id: 22,
    name: 'Container Pattern - ContainerRender wrap',
    code: `  
    /**the data and the component are more independent of the 
     * container, so has more mantainability */ 
      <ContainerRender 
                getData={ () => getDataFromServer('/books/2')} 
                render={(resource) => <BookInfo book={resource}/>} />

      </SectionWrapper>
    `
  },
  {
    id: 23,
    name: 'Container Pattern - UncontrolledPattern',
    code: `  
    /**As can be seen no hook is used ( for example useState ),
     * as this is not controlled by the component is an 
     * uncontrolled component */ 
      const UncontrolledPattern = () => {

        /**the ref is created in order to access the data*/
        const nameInputRef = React.createRef();
        const ageInputRef = React.createRef();
    
        const submitHandler = (e) => {
            e.preventDefault();
            console.log('the name ==>', nameInputRef.current.value)
            console.log('the age ==>',ageInputRef.current.value)
        }   
    
        return(
            <FormWrapper>
                <form onSubmit={submitHandler}>
                    <input name="name" type="text" placeholder="Name" ref={nameInputRef}/>
                    <input age="age" type="number" placeholder="Age" ref={ageInputRef}/>
                    <ButtonGeneral>
                        <input type="submit" placeholder="Submit"/>
                    </ButtonGeneral>
                </form>
            </FormWrapper>
        )
    }
    
    export default UncontrolledPattern;
    `
  },
  {
    id: 24,
    name: 'Container Pattern - ControlledModal',
    code: `  
    /**now the state can be controlled by the outside of the component */ 
      const ControlledModal = ({ displayModal, closeModal, stopPropagation, children }) => {

        return (
            <>
                {displayModal && (
                    <ModalBackground onClick={closeModal}>
                        <ModalContent onClick={stopPropagation}>
                            <button onClick={closeModal}>
                            <img src={close} alt="close"/>
                            </button>
                            {children}
                        </ModalContent>
                    </ModalBackground>
                )}
            </>
        );
    };
    
    export default ControlledModal;
    `
  },
  {
    id: 25,
    name: 'UnControlled Flow - UncontrolledFlowPattern',
    code: `  
    /**can be notice by reading the code that this uncontrolled flow
     * does not collect data because in some cases is only necessary 
     * to use the flow */ 
    const UncontrolledFlowPattern = ({ children }) => {
   
      /**this state to track the index of the step */
      const [currentStepIndex, setCurrentStepIndex ] = useState(0);
  
      const goNext = () => {
          setCurrentStepIndex(currentStepIndex + 1)
      }
  
      /** in this line i create an array of children and use the index*/
      const currentChild = React.Children.toArray(children)[currentStepIndex];
  
      if (React.isValidElement(currentChild)) {
          return React.cloneElement(currentChild, { goNext })
      }
  
      return( 
          <StepFlowWrapper>
              <h2>Uncontrolled flow done !! Refresh :) </h2>
          </StepFlowWrapper>
      )
  }
  
  export default UncontrolledFlowPattern;
    `
  },
  {
    id: 26,
    name: 'UnControlled Flow - UncontrolledFlowPattern wrap',
    code: `  
    /**the uncontrolled flow wraps the steps ( that are separate 
     * components )*/ 
    <UncontrolledFlowPattern>
        <Step1Flow />
        <Step2Flow />
        <Step3Flow />
    </UncontrolledFlowPattern>
    `
  }
];

/**List Pattern data  -- start */

export const authors = [
  {
    id:1,
    name:'Sarah Waters',
    age:55,
    country:'United Kingdom',
    books: ['Fingersmith', 'The Night Watch']
  },
  {
    id:2,
    name:'Haruki Murakami',
    age:71,
    country:'Japan',
    books: ['Norwegian Wood', 'Kaftka in the Shore']
  },
  {
    id:3,
    name:'Chimanmanda Ngozi Adichire',
    age:43,
    country:'Nigeria',
    books: ['Half of a Yellow Sun', 'Americanah']
  }

]

export const books = [
  {
    id:1,
    name:'To Kill a Mockingbird',
    pages:281,
    title:'Harper Lee',
    price: 12.99
  },
  {
    id:2,
    name:'The Catcher in the Eye',
    pages:224,
    title:'J.D Salinger',
    price: 9.99
  },
  {
    id:3,
    name:'The Litle Prince',
    pages:85,
    title:'Antoine de Saint-Exupery',
    price: 7.99
  }

]

/**List Pattern data  -- end */