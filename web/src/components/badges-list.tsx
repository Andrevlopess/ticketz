import { Badge, BadgeProps } from "./ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

type IData = {
  id: string | number;
  name: string;
};

interface BadgeListProps extends BadgeProps {
  items: IData[];
  maxBadges?: number;
}
export const BadgeList = ({ items, maxBadges, ...props }: BadgeListProps) => {
  return (
    <div className="flex space-x-1">
      {items && (
        <>
          {items?.slice(0, maxBadges ?? items.length)?.map((item) => (
            <Badge {...props} key={item.id}>
              {item.name}
            </Badge>
          ))}
          {maxBadges && maxBadges < items.length && (
            <HoverCard openDelay={0}>
              <HoverCardTrigger asChild>
                <Badge className="cursor-default" {...props}>
                  +{items.length - maxBadges}
                </Badge>
              </HoverCardTrigger>
              <HoverCardContent
                side="right"
                alignOffset={-4}
                align="start"
                // asChild
                className="max-w-56"
              >
                <>
                  <p className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Tags
                  </p>
                  <div className="flex flex-wrap gap-2 items-start mt-4">
                    {items.slice(maxBadges)?.map((item) => (
                      <Badge {...props} key={item.id}>
                        {item.name}
                      </Badge>
                    ))}
                  </div>
                </>
              </HoverCardContent>
            </HoverCard>
          )}
        </>
      )}
    </div>
  );
};
