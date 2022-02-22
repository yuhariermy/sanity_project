import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import testimonials from "./testimonials";
import about from "./abouts";
import brands from "./brands";
import contacts from "./contacts";
import experiences from "./experiences";
import skills from "./skills";
import workExperience from "./workExperience";
import works from "./works";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    testimonials,
    about,
    brands,
    contacts,
    experiences,
    skills,
    workExperience,
    works,
  ]),
});
