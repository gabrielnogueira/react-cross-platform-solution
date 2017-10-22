this project will be a npm package in the future, and put in package.json as dependecy

how create  component, use this structure

A component structure is:

    Presentation extends Container, that return a Render

    Presentation get how component will appear on each entry. 
        properties like: primary, raised, align, padding, margin, etc
        here is how component should appear, the format of component 
        receive a custom style (js to styled-component) by property that will apply on render of this entry (custom component theme without themeprovider)

    Container get how component behavior
        all logic is put here

    Render get how component should render on each platform
        is styled by styled component to each platform. is the face of component
        here is how component should design. the layout of component

to use component in your project:

    create a folder called components or as you with, create a container to each component that return the component
