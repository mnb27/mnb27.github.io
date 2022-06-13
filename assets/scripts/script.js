// Dummy data placeholder. Replace with array of actual data objects
const data = [
    {
      "project": "PGI Doctor",
      "stack": ["kotlin", "express", "node"],
      "description": "An android app to provide the concerned collaborator with a centralized app to manage their patient records all at a single place and reduce their effort in maintaining things offline. Also build web portal for doctors to ease view of records.",
      "website": "https://pgidoctor.df.r.appspot.com/",
      "github": "https://github.com/mnb27/PGIDoctor",
      "image": "/assets/img/pgidoctor.png",
      "needs": "People with super powers",
      "status": "In Development" },
  
    {
      "project": "Railway Reservation System",
      "stack": ["php", "mysql"],
      "description": "A reservation web portal with functionalities of user login, ticket booking, PNR enquiry and train search engine. Used triggers and procedures in addition to key constraints for the implementation of business logic. Designed an Admin portal to manage railway system database.",
      "website": "https://railres-dbms.000webhostapp.com/",
      "github": "https://github.com/mnb27/Railway-Reservation-System",
      "needs": "People with super powers, semi-super powers, or no powers at all",
      "image": "/assets/img/tunnel.png",
      "status": "Live" },
    
      {
        "project": "Campus Facility Booking",
        "stack": ["kotlin", "express", "node"],
        "description": "An android app to facilitate booking of classrooms,labs and sports complexes by the professors and students of the college. Build a web application for admin so that he can manage the database and add/view/edit the facilities. Implemented real-time location based attendance system that students can mark for booked classrooms.",
        "website": "https://campus-facility-booking-312408.uc.r.appspot.com/",
        "github": "https://github.com/mnb27/App-for-campus-facility-booking",
        "image": "/assets/img/university.png",
        "needs": "People with super powers",
        "status": "In Development" }];
    
    
    
    function Layout(props) {
      return /*#__PURE__*/(
        React.createElement("div", { className: "row" }, props.children));
    
    }
    
    class Card extends React.Component {
      render() {
        const style = {
          img: {
            maxWidth: "400px" } };
    
    
        return /*#__PURE__*/(
          React.createElement("div", { className: "col m4" }, /*#__PURE__*/
          React.createElement("div", { className: "card hoverable" }, /*#__PURE__*/
          React.createElement("div", { className: "card-image waves-effect waves-block waves-light" }, /*#__PURE__*/
          React.createElement("img", { style: style.img, className: "activator", src: this.props.data.image })), /*#__PURE__*/
    
          React.createElement("div", { className: "card-content" }, /*#__PURE__*/
          React.createElement("div", null, /*#__PURE__*/
          React.createElement(StackIcons, { data: this.props.data.stack })), /*#__PURE__*/
    
          React.createElement("span", { className: "card-title activator grey-text text-darken-4" },
          this.props.data.project, /*#__PURE__*/
          React.createElement("i", { className: "material-icons right" }, "more_vert")), /*#__PURE__*/
    
          React.createElement("div", null, /*#__PURE__*/
          // React.createElement("span", null, /*#__PURE__*/React.createElement("a", { href: this.props.data.website }, "Website")), /*#__PURE__*/
          React.createElement("span", null, /*#__PURE__*/React.createElement("a", { className: "github", href: this.props.data.github }, "Github")))), /*#__PURE__*/
    
    
          React.createElement("div", { className: "card-reveal" }, /*#__PURE__*/
          React.createElement("span", { className: "card-title grey-text text-darken-4" }, this.props.data.project, /*#__PURE__*/React.createElement("i", { className: "material-icons right" }, "close")), /*#__PURE__*/
          // React.createElement("div", null, /*#__PURE__*/React.createElement("span", { className: "status" }, this.props.data.status)), /*#__PURE__*/
          React.createElement("p", null, this.props.data.description), /*#__PURE__*/
          // React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Need:")), /*#__PURE__*/
          // React.createElement("p", null, this.props.data.needs)
          ))));
    
    
    
    
      }}
    
    
    // Note: Empty span tag on line 115 is there as placeholder for
    // the custom CSS to inject text based on stack item.
    function StackIcons(props) {
      const array = props.data;
      const icons = array.map(item => {
        return /*#__PURE__*/(
          React.createElement("div", { key: item, className: "icon" }, /*#__PURE__*/
          React.createElement("span", { className: item }, /*#__PURE__*/React.createElement("span", null))));
    
    
      });
      return /*#__PURE__*/(
        React.createElement("div", null, " ", icons, " "));
    
    }
    
    function Projects(props) {
      const projects = [];
      const data = props.data;
      data.forEach(item => {projects.push( /*#__PURE__*/React.createElement(Card, { data: item }));});
      return /*#__PURE__*/(
        React.createElement("div", null, projects));
    
    }
    
    ReactDOM.render( /*#__PURE__*/
    React.createElement(Layout, { children: /*#__PURE__*/React.createElement(Projects, { data: data }) }),
    document.getElementById('root'));