import React from "react";
import { BodyContentWrap, P } from '../Components/StyledComponents';
import { PADDING } from '../styleConstants';

const About = ({mediaMobile}) => (
	<BodyContentWrap padding={mediaMobile ? null : PADDING * 8}>
		<P>
			In the summer, after a day of camp with Wenatchee Parks and Rec. or a swim at the city pool, my brothers and I would often walk or take the bus to the library to hang out in aisles of books, surf old newspaper articles on the microfiche machines and get to know the librarians who were my mom’s co-workers and our friends. My mom’s career as a public librarian gave me the privilege of endless access to the world of books as a child.  Corduroy by Don Freeman was a dear favorite, and the Ramona books by Beverly Cleary with illustrations by Alan Tiegreen, and all Roald Dahl books, illustrated by Quentin Blake tickled my imagination and spunky sense of humor.
		</P>
		<P>
			Eleven years ago, my husband and I became Seattle residents. We now have two preschool aged children. Our local library continues to be an extension of our home. Together we discover new beloved books and the many resources and opportunities available to families. 
		</P>
		<P>
			I worked in the costume shop of the 5th Avenue Theater in Seattle for nine years. I loved the work and miss the theatre community, but the needs of my family have rearranged the hours in my days. Sharing beautiful and whimsical picture books with my children inspires me to draw and paint. I’m also inspired by the humorous every day antics of young children. The joy I get from drawing again with and for children, has motivated me to start my illustration career in earnest. I hope to see my work published in books in the next few years, but as of yet, I am pre-published.
		</P>
	</BodyContentWrap>
);

export default About;
