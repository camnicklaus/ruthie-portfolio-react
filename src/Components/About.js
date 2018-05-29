import React, { Component } from "react";
import { BodyContentWrap, P } from '../Components/StyledComponents';
import { PADDING } from '../styleConstants';

const About = ({mediaMobile}) => (
	<BodyContentWrap padding={mediaMobile ? null : PADDING * 8}>
		<P>
			The public library will always be as comfortable and cozy to me as a supportive family member or a friend I’ve known since childhood. In the summer, after a day of camp with Wenatchee Parks and Rec. or a swim at the city pool, my brothers and I would often walk or take the bus to the library to hang out in the aisles of books, surf old newspaper articles on the microfiche machines and get to know the librarians who were my mom’s co-workers and our friends. My mom started her career with North Central Regional Library at the Wenatchee Public Library when I was young, and later worked for many years at the Entiat Public Library branch as the librarian for our small town. I loved the Summer Reading Program, with it’s interesting themes, puppet shows, magicians and prizes, but especially the many wonderful books and authors. Corduroy by Don Freeman was a dear favorite, and the Ramona books by Beverly Cleary with illustrations by Alan Tiegreen, and all Roald Dahl books, illustrated by Quentin Blake tickled my imagination and spunky sense of humor.
		</P>
		<P>
			As an art student at Western Washington University in Bellingham, the on campus library was my home away from dorm. I did most of my image research there, and also made extensive use of their copy machines and printers. While in college I was asked to do a series of illustrations for the NCRL System, for their summer reading theme of “Amaze Yourself at the Library”. My drawings included dragons, castles, princes and princesses, characters reading and piles of books. Later, I designed a t-shirt illustration for the Entiat Public Library’s “Entiat Valley Reads Together” program, and more recently, a series of illustrations for Entiat Library’s literacy fair that promoted public safety.
		</P>
		<P>
			Eleven years ago, my husband and I became Seattle residents. We now have two preschool aged children. Our local library continues to be an extension of our home. Together we discover new beloved books and the many resources and opportunities available to families. We love storytime, bilingual programs and summer science opportunities for kids. We have explored a number of the amazing branch libraries in the Seattle area. A trip downtown to the Seattle Public Library’s beautiful glass building to ride it’s yellow escalators and visit the red room is an eye-wowing experience.
		</P>
		<P>
			I worked in the costume shop of the 5th Avenue Theater in Seattle for nine years. I loved the work and miss the theatre community, but the needs of my family have rearranged the hours in my days. Sharing beautiful and whimsical picture books with my children inspires me to draw and paint. I’m also inspired by the humorous every day antics of young children. The joy I get from drawing again with and for children, has motivated me to start my illustration career in earnest. I hope to see my work published in books in the next few years, but as of yet, I am pre-published.
		</P>
	</BodyContentWrap>
);

export default About;
