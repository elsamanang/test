import renderer from 'react-test-renderer';
import From from './component/form';

it('Charge the form', () => {

    const fakeForm =[
        {
          "name": "KnownErrorTypeId",
          "displayName": "Knowledge Item Type",
          "type": "select",
          "x-options": [
            { "value": 1, "text": "FAQ" },
            { "value": 2, "text": "Advice" },
            { "value": 3, "text": "Known Error" }
          ]
        },
        {
          "name": "Status",
          "displayName": "Lifecycle Status",
          "type": "select",
          "x-options": [
            { "value": 1, "text": "Published" },
            { "value": 2, "text": "Planned" },
            { "value": 3, "text": "Retired" }
          ]
        },
        {
          "name": "IsPrivate",
          "displayName": "Is Private?",
          "type": "checkbox"
        },
        {
          "name": "Summary",
          "displayName": "Summary",
          "type": "text"
        }
    ]

    const fakeSelcted ={
        KnownErrorTypeId: 1,
        Status: 1,
        IsPrivate: true,
        Summary: "element summary"
    }
    
    const component = renderer.create(
        <From formulaire={fakeForm} selected={fakeSelcted} />,
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})