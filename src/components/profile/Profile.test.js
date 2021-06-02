import React from "react";
import { create } from "react-test-renderer";
import Status from "./ComponentsProfile/Status";

let statusUser='Just info, it doesnt matter'

describe("Testing profile's status component", () => {
    test("status from props should be in the state", () => {
        const component = create( <Status status={statusUser} /> );
        const instance = component.getInstance();
        expect(instance.state.status).toBe(statusUser);
    });

    test("find span", () => {
        const component = create( <Status status={statusUser} /> );
        const instance = component.root;
        let span =instance.findByType('span')
        expect(span.children.length).toBe(1);
    });
    test("find input, don't must find", () => {
        const component = create( <Status status={statusUser} /> );
        const instance = component.root;
       
        expect(()=>{
            let input =instance.findByType('input')
        }).toThrow();
    });

    test("Check text in the span", () => {
        const component = create( <Status status={statusUser} /> );
        const instance = component.root;
        let span =instance.findByType('span')
        expect(span.children[0]).toBe(statusUser);
    });
    
    
    test("input should be displayed in redactor mode", () => {
        const component = create( <Status status={statusUser} /> );
        const instance = component.root;
        let span =instance.findByType('span')
        span.props.onDoubleClick();
        let input =instance.findByType('input')
       
        expect( input.props.value).toBe(statusUser);
    });


    test("Called callback ", () => {
        const  mockCallback=jest.fn()
        const component = create( <Status status={statusUser} updateStatus={mockCallback} /> );
        const instance = component.getInstance();
        instance.deactivateMethodMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});

