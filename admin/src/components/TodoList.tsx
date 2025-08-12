"use client"
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card} from "@/components/ui/card";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {CalendarIcon} from "lucide-react";
import {useState} from "react";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";

const TodoList = () => {
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState(new Date)
    return (
        <div>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <CalendarIcon/>
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-auto">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date || new Date());
                            setOpen(false);
                        }}
                    />
                </PopoverContent>
            </Popover>
            {/*List*/}
            <ScrollArea className={"max-h-[400px] mt-4 overflow-y-auto p-2"}>
                <div className={"flex flex-col gap-4"}>
                    {Array.from({length: 30}).map((_, index) => (
                        <Card key={index} className="p-4">
                            <div className="flex items-center gap-4">
                                <Checkbox id={"item" + (index + 1)} checked/>
                                <Label htmlFor={"item" + (index + 1)} className="text-muted-foreground">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </Label>
                            </div>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

export default TodoList;