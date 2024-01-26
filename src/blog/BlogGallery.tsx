import React from 'react';

import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { capitalize } from 'lodash';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <ul>
      {props.posts.map((elt) => (
        <li key={elt.slug} className="mb-3 flex justify-between">
          <div className="text-left">
            <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
              <h2 className="link">{elt.title}</h2>
            </Link>
            <p className="post-description">{elt.description}</p>
            <p className="date">
              {capitalize(
                format(new Date(elt.date), 'LLL d, yyyy', { locale: es })
              )}
            </p>
          </div>
          <div className="text-right">
            <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
              <img
                className="thumbnail link"
                src={`${elt.image}`}
                alt="Descripción de la imagen"
              />
            </Link>
          </div>
        </li>
      ))}
    </ul>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };
