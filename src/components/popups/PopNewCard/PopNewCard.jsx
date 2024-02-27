/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { DataContext } from '../../../context/DataContext';
import { TASK_CATEGORY } from '../../../data';
import { CalendarTitleP, CategoriesDiv, CategoriesThemes, CategoriesTitleP, FormNewArea, FormNewBlock, FormNewCreateButton, FormNewInput, PopNewCardBlock, PopNewCardCalendar, PopNewCardClose, PopNewCardContainer, PopNewCardContent, PopNewCardDiv, PopNewCardForm, PopNewCardTitle, PopNewCardWrap, SubTitleLabel } from "./PopNewCard.styled";
import { CategoryLabel } from "../../CategoryLabel/CategoryLabel";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './PopNewCard.css'
import { format } from "date-fns";
import ru from "date-fns/locale/ru";

export const PopNewCard = ({setIsShown}) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('WEB_DESIGN');	
	const [date, setDate] = useState();

	const {addTask} = useContext(DataContext);
	const closeModal = () => setIsShown(false);

	const handleCloseClick = e => {
		e.preventDefault();
		closeModal();
	}

	const handleCreateNewClick = () => {		
        const newTask = {
            title: title,
            topic: category,
            status: 'NO_STATUS',
            description: description,
            date: date
        };

		addTask(newTask)
		.then(closeModal)
		.catch(error => alert(error.message));
	}

	let footer = date 
		? <p>Срок исполнения <b>{format(date, 'P', {locale: ru})}</b></p>
		: <p>Выберите срок исполнения</p>;
	

    return (
		<PopNewCardDiv>
			<PopNewCardContainer>
				<PopNewCardBlock>
					<PopNewCardContent>
						<PopNewCardTitle>Создание задачи</PopNewCardTitle>
						<PopNewCardClose href="#" onClick={handleCloseClick}>&#10006;</PopNewCardClose>
						<PopNewCardWrap>
							<PopNewCardForm id="formNewCard" action="#">
								<FormNewBlock>
									<SubTitleLabel htmlFor="formTitle">Название задачи</SubTitleLabel>
									<FormNewInput value={title} onChange={e => setTitle(e.target.value)}  type="text" id="formTitle" placeholder="Введите название задачи..." autoFocus/>
								</FormNewBlock>
								<FormNewBlock>
									<SubTitleLabel htmlFor="textArea">Описание задачи</SubTitleLabel>
									<FormNewArea value={description} onChange={e => setDescription(e.target.value)} id="textArea"  placeholder="Введите описание задачи..."></FormNewArea>
								</FormNewBlock>
							</PopNewCardForm>
							<PopNewCardCalendar>
								<CalendarTitleP>Даты</CalendarTitleP>
								<DayPicker 
									mode="single"
									selected={date}
									onSelect={setDate}
									footer={footer}
								/>
							</PopNewCardCalendar>
						</PopNewCardWrap>
						<CategoriesDiv>
							<CategoriesTitleP>Категория</CategoriesTitleP>
							<CategoriesThemes>
								{									
									Object.keys(TASK_CATEGORY).map(code => {										
										return(
											<CategoryLabel 
												key={code} 
												code={code} 
												$size="L" 												
												onClick={() => setCategory(code)}
												className={`category-item ${category === code ? 'category-item_active' : ''}`}
											/>
										)
									})
								}
							</CategoriesThemes>
						</CategoriesDiv>
						<FormNewCreateButton className="form-new__create _hover01" id="btnCreate" onClick={handleCreateNewClick}>Создать задачу</FormNewCreateButton>
					</PopNewCardContent>
				</PopNewCardBlock>
			</PopNewCardContainer>
		</PopNewCardDiv>
    );
}