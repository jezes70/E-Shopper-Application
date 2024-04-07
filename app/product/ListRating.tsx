"use client";

import Heading from "@/app/components/Heading";
import moment from "moment";

interface ListRatingProps {
  product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div>
      <Heading title="Product Review" />
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id} className="max-w-300px">
                <div className="flex gap-2 items-center">
                  <div>Avatar</div>
                  <div className="font-semibold">{review?.user.name}</div>
                  <div className="font-light">
                    {review.createdDate && moment(review.createdDate).fromNow()}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListRating;
